import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeIn],
  template: `
    <nav class="navbar navbar-expand-lg" [class.scrolled]="isScrolled" @fadeIn>
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <img src="assets/images/logo.png" alt="Red Sea Construction">
        </a>
        
        <button 
          class="navbar-toggler" 
          type="button" 
          (click)="isMenuOpen = !isMenuOpen"
          [attr.aria-expanded]="isMenuOpen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div 
          class="collapse navbar-collapse" 
          [class.show]="isMenuOpen"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" (click)="toggleAboutDropdown($event)">
                About Us
              </a>
              <ul class="dropdown-menu" [class.show]="isAboutDropdownOpen">
                <li><a class="dropdown-item" routerLink="/about">Overview</a></li>
                <li><a class="dropdown-item" routerLink="/about/history">History</a></li>
                <li><a class="dropdown-item" routerLink="/about/awards">Awards</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/projects" routerLinkActive="active">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 1rem 0;
      transition: all 0.3s ease;
      background: transparent;

      &.scrolled {
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 0.5rem 0;
      }
    }

    .navbar-brand {
      img {
        height: 50px;
        transition: height 0.3s ease;

        .scrolled & {
          height: 40px;
        }
      }
    }

    .nav-link {
      color: var(--secondary-color);
      font-weight: 500;
      padding: 0.5rem 1rem !important;
      transition: all 0.3s ease;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      &:hover, &.active {
        color: var(--primary-color);

        &:after {
          width: 100%;
        }
      }
    }

    .dropdown-menu {
      border: none;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border-radius: 8px;
      padding: 0.5rem;

      .dropdown-item {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          background: var(--primary-color);
          color: white;
        }
      }
    }

    @media (max-width: 991.98px) {
      .navbar-collapse {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        margin-top: 1rem;
      }

      .dropdown-menu {
        box-shadow: none;
        padding-left: 1rem;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  isAboutDropdownOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleAboutDropdown(event: Event) {
    event.preventDefault();
    this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
  }
}