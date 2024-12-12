import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5 mt-5">
      <h2 class="section-title text-center">Career Opportunities</h2>
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let position of positions">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{position.title}}</h5>
              <p class="card-text">{{position.description}}</p>
              <p><strong>Location:</strong> {{position.location}}</p>
              <button class="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CareersComponent {
  positions = [
    {
      title: 'Senior Project Manager',
      description: 'Looking for an experienced project manager to lead large-scale construction projects.',
      location: 'Cairo, Egypt'
    },
    {
      title: 'Civil Engineer',
      description: 'Seeking civil engineers with 5+ years of experience in commercial construction.',
      location: 'Alexandria, Egypt'
    },
    {
      title: 'Site Supervisor',
      description: 'Experienced site supervisor needed for residential project developments.',
      location: 'Hurghada, Egypt'
    }
  ];
}