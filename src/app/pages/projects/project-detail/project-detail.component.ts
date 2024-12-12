import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '@app/shared/services/project.service';
import { Project } from '@app/shared/interfaces/project.interface';
import { ProjectGalleryComponent } from '@app/components/project-gallery/project-gallery.component';
import { ProjectInfoComponent } from '@app/components/project-info/project-info.component';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, ProjectGalleryComponent, ProjectInfoComponent],
  animations: [fadeIn],
  template: `
    <div class="project-detail-page" *ngIf="project" @fadeIn>
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-lg-8">
            <app-project-gallery
              [images]="project.images"
              [title]="project.title"
            ></app-project-gallery>
          </div>
          
          <div class="col-lg-4">
            <app-project-info
              [project]="project"
            ></app-project-info>
          </div>
        </div>

        <div class="related-projects mt-5" *ngIf="relatedProjects.length">
          <h2 class="section-title">Related Projects</h2>
          <div class="row g-4">
            <div class="col-md-4" *ngFor="let relatedProject of relatedProjects">
              <div class="related-project-card" (click)="navigateToProject(relatedProject.id)">
                <img [src]="relatedProject.images[0]" [alt]="relatedProject.title">
                <div class="card-content">
                  <span class="category">{{relatedProject.category}}</span>
                  <h3>{{relatedProject.title}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-detail-page {
      background-color: var(--light-bg);
      min-height: 100vh;
    }

    .related-projects {
      .section-title {
        margin-bottom: 2rem;
      }
    }

    .related-project-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);

        img {
          transform: scale(1.1);
        }
      }

      img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .card-content {
        padding: 1.5rem;

        .category {
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        h3 {
          color: var(--secondary-color);
          margin: 0;
          font-size: 1.2rem;
        }
      }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  relatedProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.loadProject(id);
    });
  }

  private loadProject(id: number) {
    this.projectService.getProjectById(id).subscribe(project => {
      if (project) {
        this.project = project;
        this.loadRelatedProjects(project.category, project.id);
      }
    });
  }

  private loadRelatedProjects(category: string, currentId: number) {
    this.projectService.getProjects().subscribe(projects => {
      this.relatedProjects = projects
        .filter(p => p.category === category && p.id !== currentId)
        .slice(0, 3);
    });
  }

  navigateToProject(id: number) {
    // Smooth scroll to top before loading new project
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.loadProject(id);
  }
}