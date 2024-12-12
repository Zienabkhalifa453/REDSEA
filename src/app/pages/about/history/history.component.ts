import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <div class="history-page" @fadeIn>
      <div class="history-header">
        <div class="container">
          <h1>Our Journey</h1>
          <p class="lead">Building Excellence Since 1970</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="timeline">
          <div class="timeline-item" *ngFor="let event of timelineEvents; let i = index">
            <div class="timeline-content" [class.right]="i % 2 !== 0">
              <div class="timeline-date">{{event.year}}</div>
              <div class="timeline-body">
                <h3>{{event.title}}</h3>
                <p>{{event.description}}</p>
                <img *ngIf="event.image" [src]="event.image" [alt]="event.title" class="timeline-image">
              </div>
            </div>
          </div>
        </div>

        <div class="milestones mt-5">
          <h2 class="text-center mb-4">Key Milestones</h2>
          <div class="row g-4">
            <div class="col-md-4" *ngFor="let milestone of milestones">
              <div class="milestone-card">
                <div class="milestone-icon">
                  <i [class]="milestone.icon"></i>
                </div>
                <h3>{{milestone.title}}</h3>
                <p>{{milestone.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .history-header {
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                  url('/assets/images/history-bg.jpg') no-repeat center;
      background-size: cover;
      color: white;
      padding: 8rem 0 4rem;
      text-align: center;
    }

    .timeline {
      position: relative;
      padding: 2rem 0;

      &:before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background: var(--primary-color);
      }
    }

    .timeline-item {
      margin-bottom: 3rem;
      position: relative;
      width: 100%;
    }

    .timeline-content {
      width: 45%;
      margin-left: auto;
      margin-right: 5%;
      position: relative;

      &.right {
        margin-left: 5%;
        margin-right: auto;
      }
    }

    .timeline-date {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      transform: translateY(-50%);
    }

    .timeline-body {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);

      h3 {
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        margin-bottom: 1rem;
      }
    }

    .timeline-image {
      width: 100%;
      border-radius: 8px;
      margin-top: 1rem;
    }

    .milestone-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      .milestone-icon {
        width: 80px;
        height: 80px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;

        i {
          font-size: 2rem;
          color: white;
        }
      }

      h3 {
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }

      p {
        color: #666;
      }
    }

    @media (max-width: 768px) {
      .timeline:before {
        left: 30px;
      }

      .timeline-content,
      .timeline-content.right {
        width: calc(100% - 60px);
        margin-left: 60px;
      }
    }
  `]
})
export class HistoryComponent {
  timelineEvents = [
    {
      year: '1970',
      title: 'Foundation',
      description: 'Red Sea Construction was established in Cairo, marking the beginning of our journey.',
      image: 'assets/images/history/1970.jpg'
    },
    {
      year: '1985',
      title: 'Regional Expansion',
      description: 'Expanded operations to Alexandria and the Red Sea coast.',
      image: 'assets/images/history/1985.jpg'
    },
    {
      year: '2000',
      title: 'Technological Innovation',
      description: 'Adopted cutting-edge construction technologies and sustainable practices.',
      image: 'assets/images/history/2000.jpg'
    },
    {
      year: '2010',
      title: 'International Projects',
      description: 'Started undertaking major projects across the Middle East.',
      image: 'assets/images/history/2010.jpg'
    },
    {
      year: '2023',
      title: 'Sustainability Focus',
      description: 'Launched comprehensive green building initiatives.',
      image: 'assets/images/history/2023.jpg'
    }
  ];

  milestones = [
    {
      icon: 'fas fa-building',
      title: 'First Major Project',
      description: 'Completed our first large-scale residential complex in 1975'
    },
    {
      icon: 'fas fa-award',
      title: 'Industry Recognition',
      description: 'Received our first construction excellence award in 1990'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Presence',
      description: 'Expanded operations to 5 countries by 2015'
    }
  ];
}