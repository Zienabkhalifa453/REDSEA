import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <div class="awards-page" @fadeIn>
      <div class="awards-header">
        <div class="container">
          <h1>Our Achievements</h1>
          <p class="lead">Recognition of Excellence in Construction</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="featured-award mb-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img src="assets/images/awards/featured.jpg" alt="Featured Award" class="img-fluid rounded">
            </div>
            <div class="col-lg-6">
              <div class="featured-content">
                <div class="award-year">2023</div>
                <h2>Construction Excellence Award</h2>
                <p class="lead">Recognized for outstanding achievement in sustainable construction practices</p>
                <div class="award-details">
                  <div class="detail-item">
                    <i class="fas fa-trophy"></i>
                    <span>Best Sustainable Project</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-building"></i>
                    <span>Red Sea Eco Resort</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-star"></i>
                    <span>International Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="awards-grid">
          <div class="row g-4">
            <div class="col-md-6 col-lg-4" *ngFor="let award of awards">
              <div class="award-card">
                <div class="award-image">
                  <img [src]="award.image" [alt]="award.title">
                  <div class="award-year">{{award.year}}</div>
                </div>
                <div class="award-content">
                  <h3>{{award.title}}</h3>
                  <p>{{award.description}}</p>
                  <div class="award-org">
                    <i class="fas fa-award"></i>
                    <span>{{award.organization}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="certifications mt-5">
          <h2 class="text-center mb-4">Our Certifications</h2>
          <div class="row g-4">
            <div class="col-md-4" *ngFor="let cert of certifications">
              <div class="cert-card">
                <div class="cert-icon">
                  <i [class]="cert.icon"></i>
                </div>
                <h3>{{cert.title}}</h3>
                <p>{{cert.description}}</p>
                <div class="cert-validity">Valid until: {{cert.validUntil}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .awards-header {
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                  url('/assets/images/awards-bg.jpg') no-repeat center;
      background-size: cover;
      color: white;
      padding: 8rem 0 4rem;
      text-align: center;
    }

    .featured-award {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .featured-content {
      padding: 2rem;

      .award-year {
        background: var(--primary-color);
        color: white;
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        margin-bottom: 1rem;
      }

      h2 {
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }
    }

    .award-details {
      margin-top: 2rem;

      .detail-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        i {
          color: var(--primary-color);
          font-size: 1.2rem;
        }
      }
    }

    .award-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      .award-image {
        position: relative;
        aspect-ratio: 16/9;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .award-year {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
      }

      .award-content {
        padding: 1.5rem;

        h3 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .award-org {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;

          i {
            color: var(--primary-color);
          }
        }
      }
    }

    .cert-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      .cert-icon {
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

      .cert-validity {
        margin-top: 1rem;
        color: #666;
        font-style: italic;
      }
    }
  `]
})
export class AwardsComponent {
  awards = [
    {
      year: '2022',
      title: 'Best Commercial Project',
      description: 'Awarded for the innovative design and execution of Red Sea Business Tower',
      organization: 'Egyptian Construction Association',
      image: 'assets/images/awards/award1.jpg'
    },
    {
      year: '2021',
      title: 'Safety Excellence Award',
      description: 'Recognition for maintaining exceptional safety standards across all projects',
      organization: 'Construction Safety Council',
      image: 'assets/images/awards/award2.jpg'
    },
    {
      year: '2020',
      title: 'Green Building Award',
      description: 'For outstanding achievement in sustainable construction practices',
      organization: 'Green Building Council',
      image: 'assets/images/awards/award3.jpg'
    }
  ];

  certifications = [
    {
      icon: 'fas fa-certificate',
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      validUntil: 'December 2024'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'ISO 45001:2018',
      description: 'Occupational Health and Safety Management',
      validUntil: 'November 2024'
    },
    {
      icon: 'fas fa-leaf',
      title: 'ISO 14001:2015',
      description: 'Environmental Management System',
      validUntil: 'October 2024'
    }
  ];
}