import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload-to-google-drive',
  templateUrl: './UploadToGoogle.component.html',
  styleUrls: ['./UploadToGoogle.component.css'],
})
export class UploadToGoogleDriveComponent {
  selectedFile: File | null = null;
  uploadProgress: number | null = null;
  accessToken: string = '';
  refreshToken: string = ''; // Dummy access token



  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
     private router: Router
    ) {}

  ngOnInit(): void {
    // Extract OTT from query parameters
    this.route.queryParams.subscribe(params => {
      const oneTimeToken = params['ott'];
      if (oneTimeToken) {
        // Exchange OTT for actual tokens
        this.http.post('http://localhost:9090/api/exchange-ott', { oneTimeToken }).subscribe(
          (response: any) => {
            this.accessToken = response.accessToken; // Save access token
            console.log('Access Token:', this.accessToken);
          },
          error => {
            console.error('Failed to exchange OTT:', error);
            this.router.navigate(['/authenticate']); // Redirect to authenticate if error
          }
        );
      } else {
        console.error('No OTT found in URL');
        this.router.navigate(['/authenticate']); // Redirect if no OTT
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }
  onUploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('accessToken', this.accessToken);  // Append the access token to the FormData
      formData.append('refreshToken', this.refreshToken);  // Append the access token to the FormData

  
      this.http.post('http://localhost:9090/api/upload', formData, { responseType: 'text' }) // Expect plain text response
        .subscribe(
          (response: string) => {
            // Backend returned success
            alert(response); // Show the success message
          },
          (error) => {
            // Handle error response
            console.error('Error occurred during file upload:', error);
            alert('Failed to upload file');
          }
        );
    } else {
      alert('Please select a file to upload.');
    }
  }
  
}
