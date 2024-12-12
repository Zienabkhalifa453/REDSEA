import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@app/shared/interfaces/project.interface';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <div class="project-info-container" @fadeIn>
      <div class="project-header">
        <span class="category-badge">{{project.category}}</span>
        <h1 class="project-title">{{project.title}}</h1>
      </div>

      <div class="info-grid">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="info-content">
            <span class="label">Location</span>
            <span class="value">{{project.location}}</span>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-calendar"></i>
          <div class="info-content">
            <span class="label">Completion Date</span>
            <span class="value">{{project.completionDate}}</span>
          </div>
        </div>
      </div>

      <div class="description">
        <h2>Project Overview</h2>
        <p>{{project.description}}</p>
      </div>

      <div class="features">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div class="feature-item" *ngFor="let feature of project.features">
            <i class="fas fa-check-circle"></i>
            <span>{{feature}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-info-container {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .project-header {
      margin-bottom: 2rem;
    }

    .category-badge {
      background: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      display: inline-block;
      margin-bottom: 1rem;
    }

    .project-title {
      font-size: 2.5rem;
      color: var(--secondary-color);
      margin: 0;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;

      i {
        font-size: 1.5rem;
        color: var(--primary-color);
      }

      .info-content {
        display: flex;
        flex-direction: column;
      }

      .label {
        font-size: 0.9rem;
        color: #666;
      }

      .value {
        font-weight: 500;
        color: var(--secondary-color);
      }
    }

    .description {
      margin-bottom: 2rem;

      h2 {
        color: var(--secondary-color);
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }

    .features {
      h2 {
        color: var(--secondary-color);
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: var(--primary-color);
      }

      span {
        color: #666;
      }
    }
  `]
})
export class ProjectInfoComponent {
  @Input() project!: Project;
}