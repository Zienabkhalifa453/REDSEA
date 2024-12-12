import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { VisionCardComponent } from '../../components/vision-card/vision-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TimelineComponent, VisionCardComponent],
  template: `
    <div class="about-header" data-aos="fade-down">
      <div class="container">
        <h1>About Us</h1>
        <p>Building Excellence Since 1970</p>
      </div>
    </div>

    <section class="vision-mission py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let item of visionItems">
            <app-vision-card
              [icon]="item.icon"
              [title]="item.title"
              [description]="item.description"
              [animation]="'fade-up'"
            ></app-vision-card>
          </div>
        </div>
      </div>
    </section>

    <section class="company-overview py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6" data-aos="fade-right">
            <h2 class="section-title">Our Story</h2>
            <p>Founded in 1970, Red Sea Construction has grown from a small local contractor to one of Egypt's leading construction companies. Our journey has been marked by unwavering commitment to quality, innovation, and customer satisfaction.</p>
            <p>Today, we stand as a symbol of excellence in the construction industry, having completed numerous landmark projects across residential, commercial, and industrial sectors.</p>
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <img src="assets/images/about/company-overview.jpg" alt="Company Overview" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="history py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our Journey</h2>
        <app-timeline [events]="historyEvents"></app-timeline>
      </div>
    </section>

    <section class="achievements py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our Achievements</h2>
        <div class="row g-4">
          <div class="col-md-3 text-center" *ngFor="let achievement of achievements" data-aos="fade-up">
            <div class="achievement-card">
              <i [class]="achievement.icon + ' mb-3'"></i>
              <h3 class="counter">{{achievement.value}}</h3>
              <p>{{achievement.label}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-header {
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/images/about/header-bg.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 8rem 0 4rem;
      text-align: center;
    }

    .achievement-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .achievement-card i {
      font-size: 2.5rem;
      color: var(--primary-color);
    }

    .counter {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--primary-color);
      margin: 1rem 0;
    }
  `]
})
export class AboutComponent {
  visionItems = [
    {
      icon: 'fas fa-eye',
      title: 'Vision',
      description: 'To be the leading construction company in the Middle East, setting new standards of excellence and innovation.'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Mission',
      description: 'To deliver exceptional construction projects that exceed client expectations while maintaining the highest standards of quality and safety.'
    },
    {
      icon: 'fas fa-star',
      title: 'Values',
      description: 'Integrity, Excellence, Innovation, Sustainability, and Customer Focus guide everything we do.'
    }
  ];

  historyEvents = [
    {
      year: '1970',
      title: 'Foundation',
      description: 'Red Sea Construction was established in Cairo.'
    },
    {
      year: '1985',
      title: 'Expansion',
      description: 'Expanded operations to Alexandria and Hurghada.'
    },
    {
      year: '2000',
      title: 'Modernization',
      description: 'Adopted cutting-edge construction technologies.'
    },
    {
      year: '2010',
      title: 'International Projects',
      description: 'Started undertaking projects in neighboring countries.'
    },
    {
      year: '2023',
      title: 'Sustainability Focus',
      description: 'Launched green building initiatives.'
    }
  ];

  achievements = [
    {
      icon: 'fas fa-building fa-3x',
      value: '500+',
      label: 'Projects Completed'
    },
    {
      icon: 'fas fa-users fa-3x',
      value: '1000+',
      label: 'Employees'
    },
    {
      icon: 'fas fa-award fa-3x',
      value: '50+',
      label: 'Awards Won'
    },
    {
      icon: 'fas fa-globe fa-3x',
      value: '5',
      label: 'Countries'
    }
  ];
}