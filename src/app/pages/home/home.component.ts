import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeIn, slideIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeIn, slideIn],
  template: `
    <section class="hero" @fadeIn>
      <div class="hero-content">
        <h1>Building Tomorrow's Legacy</h1>
        <p>Excellence in Construction Since 1970</p>
        <a routerLink="/projects" class="btn btn-primary btn-lg">Explore Our Projects</a>
      </div>
    </section>

    <section class="features py-5" @slideIn>
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let feature of features">
            <div class="feature-card text-center p-4">
              <i [class]="feature.icon + ' fa-3x mb-3'"></i>
              <h3>{{feature.title}}</h3>
              <p>{{feature.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: calc(100vh - 76px);
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                  url('/assets/images/hero-bg.jpg') no-repeat center center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    .hero-content {
      max-width: 800px;
      padding: 2rem;

      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
    }

    .feature-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      i {
        color: var(--primary-color);
      }

      h3 {
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  features = [
    {
      icon: 'fas fa-building',
      title: 'Quality Construction',
      description: 'Delivering excellence in every project with premium materials and craftsmanship'
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'Committed to completing projects on schedule without compromising quality'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Building',
      description: 'Implementing eco-friendly practices and sustainable construction methods'
    }
  ];
}