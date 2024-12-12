import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="vision-card" [attr.data-aos]="animation">
      <div class="icon-wrapper">
        <i [class]="icon"></i>
      </div>
      <h3>{{title}}</h3>
      <p>{{description}}</p>
    </div>
  `,
  styles: [`
    .vision-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .vision-card:hover {
      transform: translateY(-10px);
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-wrapper i {
      font-size: 2rem;
      color: white;
    }

    h3 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }
  `]
})
export class VisionCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() animation: string = 'fade-up';
}