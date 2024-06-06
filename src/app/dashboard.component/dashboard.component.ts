import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'MyangularApplication';
  projects = [
    { name: 'ambarkaarhouse', image: '/ambarkaarhouse.jpg', description: 'description about the project lies here and all the related pictures' },
    { name: 'chouse', image: '/chouse.jpg', description: 'description about the project lies here and all the related pictures',
      rooms : [{
        room1:{
          picture:"/c1",
          description:"here goes the description of room 1"
        },
        room2:{
          picture:"/c2",
          description:"here goes the description of room 2"
        },
        room3:{
          picture:"/c3",
          description:"here goes the description of room 3"
        },
        room4:{
          picture:"/c4",
          description:"here goes the description of room 4"
        }
      }
      ]
    },
    { name: 'dhouse', image: '/dhouse.png', description: 'ambarkaar house description of the project.' },
    { name: 'ahouse', image: '/ahouse.jpg', description: 'ambarkaar house description of the project.' },
    { name: 'chouse', image: '/chouse.jpg', description: 'project number 3' },
    { name: 'bhouse', image: '/bhouse.jpg', description: 'ambarkaar house description of the project.' },



    // Add more projects as needed
  ];

  constructor(private router: Router) { }

  navigateToProject(projectName: string): void {
    this.router.navigate([`/project/${projectName}`]);
  }
}
