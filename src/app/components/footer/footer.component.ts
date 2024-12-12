import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-dark text-light py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h5>Red Sea Construction</h5>
            <p>Building excellence since 1970</p>
            <div class="social-links">
              <a href="#" class="me-3"><i class="fab fa-facebook"></i></a>
              <a href="#" class="me-3"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/projects">Projects</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contact Info</h5>
            <ul class="list-unstyled">
              <li><i class="fas fa-map-marker-alt me-2"></i> Cairo, Egypt</li>
              <li><i class="fas fa-phone me-2"></i> +20 123 456 789</li>
              <li><i class="fas fa-envelope me-2"></i> info@redseaconstruction.com</li>
            </ul>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 text-center">
            <p class="mb-0">© 2024 Red Sea Construction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      margin-top: auto;
    }

    h5 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .social-links a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }

    ul li {
      margin-bottom: 0.5rem;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }
  `]
})
export class FooterComponent {}