import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Testservice{
  
  constructor(private http:HttpClient){}

  serviceMethod(){
    this.http.get("http://localhost:8080/getData",).subscribe((result) =>{
    console.log(result);
  });
  }
}
