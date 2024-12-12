import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectCategory } from '../interfaces/project.interface';
import { PROJECT_CATEGORIES } from '../constants/project-categories';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Marina Heights Resort',
      description: 'Luxury beachfront resort featuring modern architecture and premium amenities',
      category: 'residential',
      location: 'Hurghada, Egypt',
      completionDate: '2023',
      images: [
        'assets/images/projects/marina-heights-1.jpg',
        'assets/images/projects/marina-heights-2.jpg',
        'assets/images/projects/marina-heights-3.jpg'
      ],
      features: ['250 Units', 'Private Beach', 'Swimming Pools', 'Fitness Center']
    },
    {
      id: 2,
      title: 'Red Sea Business Tower',
      description: 'State-of-the-art office complex in the heart of the business district',
      category: 'commercial',
      location: 'Cairo, Egypt',
      completionDate: '2022',
      images: [
        'assets/images/projects/business-tower-1.jpg',
        'assets/images/projects/business-tower-2.jpg'
      ],
      features: ['40 Floors', 'Smart Building Technology', 'Underground Parking', 'Conference Center']
    },
    {
      id: 3,
      title: 'Desert Industrial Park',
      description: 'Modern industrial facility with sustainable infrastructure',
      category: 'industrial',
      location: 'Alexandria, Egypt',
      completionDate: '2023',
      images: [
        'assets/images/projects/industrial-park-1.jpg',
        'assets/images/projects/industrial-park-2.jpg'
      ],
      features: ['500,000 sqm', 'Solar Power', 'Waste Management', 'Logistics Hub']
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }

  getCategories(): Observable<ProjectCategory[]> {
    return of(PROJECT_CATEGORIES);
  }

  getProjectsByCategory(categoryId: string): Observable<Project[]> {
    if (categoryId === 'all') {
      return of(this.projects);
    }
    return of(this.projects.filter(project => project.category === categoryId));
  }
}