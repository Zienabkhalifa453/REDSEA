import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5 mt-5">
      <h2 class="section-title text-center">Our Projects</h2>
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let project of projects">
          <div class="card h-100">
            <img [src]="project.image" class="card-img-top" [alt]="project.title">
            <div class="card-body">
              <h5 class="card-title">{{project.title}}</h5>
              <p class="card-text">{{project.description}}</p>
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Luxury Resort Complex',
      description: 'A 5-star resort complex with modern amenities and stunning architecture.',
      image: 'assets/images/project1.jpg'
    },
    {
      title: 'Commercial Tower',
      description: 'State-of-the-art office tower in the heart of the business district.',
      image: 'assets/images/project2.jpg'
    },
    {
      title: 'Residential Community',
      description: 'Modern residential community with premium facilities and services.',
      image: 'assets/images/project3.jpg'
    }
  ];
}