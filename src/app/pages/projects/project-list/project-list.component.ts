import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';
import { ProjectFilterComponent } from '../../../components/project-filter/project-filter.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCardComponent, ProjectFilterComponent],
  template: `
    <div class="projects-header" data-aos="fade-down">
      <div class="container">
        <h1 class="text-center mb-5">Our Projects</h1>
      </div>
    </div>

    <div class="container py-5">
      <app-project-filter
        [categories]="categories"
        [selectedCategory]="selectedCategory"
        (categoryChange)="filterByCategory($event)"
        data-aos="fade-up"
      ></app-project-filter>

      <div class="row g-4 mt-4">
        <div 
          class="col-md-6 col-lg-4" 
          *ngFor="let project of filteredProjects; let i = index"
          [attr.data-aos]="'fade-up'"
          [attr.data-aos-delay]="i * 100"
        >
          <app-project-card
            [project]="project"
            (click)="navigateToProject(project.id)"
          ></app-project-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-header {
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                  url('/assets/images/projects-header.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 8rem 0 4rem;
      margin-bottom: 2rem;
    }

    .projects-header h1 {
      font-size: 3rem;
      font-weight: 700;
    }
  `]
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });

    this.projectService.getProjectCategories().subscribe(categories => {
      this.categories = ['All', ...categories];
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = category === 'All' 
      ? this.projects 
      : this.projects.filter(project => project.category === category);
  }

  navigateToProject(id: number) {
    // Add smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}