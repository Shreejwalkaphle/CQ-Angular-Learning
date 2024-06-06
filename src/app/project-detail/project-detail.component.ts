import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectName: string | null = '';
  backgroundImage: string | null = '';
  project: Project | null = null; // Use the Project type

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the project name from route parameters
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('name');
      if (this.projectName) {
        this.fetchProjectData(this.projectName);
      }
    });
  }

  fetchProjectData(projectName: string): void {
    // Replace this with actual logic to get project data
    // For demonstration purposes, using hardcoded data
    const projects: Project[] = [
      { name: 'ambarkaarhouse', image: '/ambarkaarhouse.jpg', description: 'Description of Ambarkaar House',
      rooms: {
        room1: { picture: "/c1.jpg", description: "Description of Room 1 : This spacious living room features elegant hardwood floors and a large bay window that floods the space with natural light. The room is designed for comfort and style, with plush sofas, a modern coffee table, and a chic rug. The neutral color palette complements the contemporary decor, while artwork on the walls adds a touch of sophistication. A cozy fireplace serves as a focal point, perfect for relaxing on chilly evenings. The open layout seamlessly connects to the dining area, making it ideal for both everyday living and entertaining guests." },
        room2: { picture: "/c2.jpg", description: "Description of Room 2:The master bedroom offers a serene retreat with its soothing color scheme and luxurious furnishings. The room boasts a king-sized bed with a plush mattress and high-quality linens, ensuring a restful sleep. Floor-to-ceiling windows provide breathtaking views of the garden and allow natural light to brighten the space. A stylish wardrobe and bedside tables offer ample storage, while the soft area rug adds warmth underfoot. The en-suite bathroom features a walk-in shower and modern fixtures, creating a spa-like experience right at home. This room is designed for ultimate relaxation and comfort." },
        room3: { picture: "/c3.jpg", description: "Description of Room 3:This vibrant and cozy study is perfect for working or reading. The room features built-in bookshelves that reach from floor to ceiling, providing plenty of space for a diverse book collection. A sturdy wooden desk and ergonomic chair create an inviting workspace, while large windows let in abundant natural light. The walls are adorned with inspirational artwork, and a comfortable armchair is placed near the window for quiet contemplation. Soft, ambient lighting enhances the room's warmth, making it a productive and tranquil environment for focused tasks or leisure reading." },
        room4: { picture: "/c4.jpg", description: "Description of Room 4:The contemporary kitchen is a chef’s dream, designed with both functionality and style in mind. It features state-of-the-art appliances, including a double oven, a sleek refrigerator, and a gas cooktop. The expansive countertops provide ample space for meal preparation, while the custom cabinetry offers generous storage. A large island with bar seating serves as a central hub for cooking and casual dining. Stylish pendant lights illuminate the space, and a subway tile backsplash adds a touch of elegance. The kitchen’s open layout ensures that it’s both practical for cooking and inviting for social gatherings" }
      } },
      { name: 'chouse', image: '/chouse.jpg', description: 'Description of Chouse', rooms: {
        room1: { picture: "/a1.jpg", description: "Description of Room 1 : This spacious living room features elegant hardwood floors and a large bay window that floods the space with natural light. The room is designed for comfort and style, with plush sofas, a modern coffee table, and a chic rug. The neutral color palette complements the contemporary decor, while artwork on the walls adds a touch of sophistication. A cozy fireplace serves as a focal point, perfect for relaxing on chilly evenings. The open layout seamlessly connects to the dining area, making it ideal for both everyday living and entertaining guests." },
        room2: { picture: "/a2.jpg", description: "Description of Room 2:The master bedroom offers a serene retreat with its soothing color scheme and luxurious furnishings. The room boasts a king-sized bed with a plush mattress and high-quality linens, ensuring a restful sleep. Floor-to-ceiling windows provide breathtaking views of the garden and allow natural light to brighten the space. A stylish wardrobe and bedside tables offer ample storage, while the soft area rug adds warmth underfoot. The en-suite bathroom features a walk-in shower and modern fixtures, creating a spa-like experience right at home. This room is designed for ultimate relaxation and comfort." },
        room3: { picture: "/a3.jpg", description: "Description of Room 3:This vibrant and cozy study is perfect for working or reading. The room features built-in bookshelves that reach from floor to ceiling, providing plenty of space for a diverse book collection. A sturdy wooden desk and ergonomic chair create an inviting workspace, while large windows let in abundant natural light. The walls are adorned with inspirational artwork, and a comfortable armchair is placed near the window for quiet contemplation. Soft, ambient lighting enhances the room's warmth, making it a productive and tranquil environment for focused tasks or leisure reading." },
        room4: { picture: "/a4.jpg", description: "Description of Room 4:The contemporary kitchen is a chef’s dream, designed with both functionality and style in mind. It features state-of-the-art appliances, including a double oven, a sleek refrigerator, and a gas cooktop. The expansive countertops provide ample space for meal preparation, while the custom cabinetry offers generous storage. A large island with bar seating serves as a central hub for cooking and casual dining. Stylish pendant lights illuminate the space, and a subway tile backsplash adds a touch of elegance. The kitchen’s open layout ensures that it’s both practical for cooking and inviting for social gatherings" }
      }},
      { name: 'dhouse', image: '/dhouse.png', description: 'Description of Dhouse' }
    ];

    this.project = projects.find(p => p.name === projectName) || null;
    if (this.project) {
      this.backgroundImage = this.project.image; // Set background image
    }
  }

  getRoomEntries() {
    if (this.project?.rooms) {
      return Object.entries(this.project.rooms).map(([key, value], index) => ({ key, value, index }));
    }
    return [];
  }
}

interface Room {
  picture: string;
  description: string;
}

interface Project {
  name: string;
  image: string;
  description: string;
  rooms?: { [key: string]: Room };
}
