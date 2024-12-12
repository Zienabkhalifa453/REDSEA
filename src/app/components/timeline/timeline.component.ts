import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      <div class="timeline-item" *ngFor="let event of events; let i = index" [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'">
        <div class="timeline-content" [class.right]="i % 2 !== 0">
          <div class="year">{{event.year}}</div>
          <h3>{{event.title}}</h3>
          <p>{{event.description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      position: relative;
      padding: 2rem 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: var(--primary-color);
    }

    .timeline-item {
      margin-bottom: 3rem;
      position: relative;
      width: 100%;
    }

    .timeline-content {
      position: relative;
      width: 45%;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      margin-left: auto;
      margin-right: 5%;
    }

    .timeline-content.right {
      margin-left: 5%;
      margin-right: auto;
    }

    .year {
      position: absolute;
      top: -30px;
      background: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
    }

    .timeline-content::before {
      content: '';
      position: absolute;
      top: 20px;
      right: -40px;
      width: 20px;
      height: 20px;
      background: var(--primary-color);
      border-radius: 50%;
    }

    .timeline-content.right::before {
      left: -40px;
      right: auto;
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 30px;
      }

      .timeline-content,
      .timeline-content.right {
        width: calc(100% - 60px);
        margin-left: 60px;
      }

      .timeline-content::before,
      .timeline-content.right::before {
        left: -40px;
        right: auto;
      }
    }
  `]
})
export class TimelineComponent {
  @Input() events: TimelineEvent[] = [];
}