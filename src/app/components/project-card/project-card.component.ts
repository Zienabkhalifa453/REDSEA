import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="project-card">
      <div class="project-image">
        <img [src]="project.images[0]" [alt]="project.title">
        <div class="project-overlay">
          <span class="view-project">View Project</span>
        </div>
      </div>
      <div class="project-content">
        <span class="project-category">{{project.category}}</span>
        <h3>{{project.title}}</h3>
        <div class="project-meta">
          <span><i class="fas fa-map-marker-alt"></i> {{project.location}}</span>
          <span><i class="fas fa-calendar"></i> {{project.completionDate}}</span>
        </div>
        <p>{{project.description}}</p>
        <a [routerLink]="['/projects', project.id]" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .project-image {
      position: relative;
      overflow: hidden;
      padding-top: 66.67%;
    }

    .project-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .view-project {
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.75rem 1.5rem;
      border: 2px solid white;
      border-radius: 30px;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-category {
      display: inline-block;
      background: var(--primary-color);
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .project-meta {
      display: flex;
      gap: 1rem;
      margin: 1rem 0;
      font-size: 0.9rem;
      color: #666;
    }

    .project-meta i {
      margin-right: 0.5rem;
      color: var(--primary-color);
    }

    h3 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
      color: var(--secondary-color);
    }

    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}