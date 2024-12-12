import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="filter-container">
      <div class="filter-buttons">
        <button 
          *ngFor="let category of categories"
          class="filter-btn"
          [class.active]="selectedCategory === category"
          (click)="onCategorySelect(category)"
        >
          {{category}}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .filter-container {
      margin-bottom: 2rem;
    }

    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid var(--primary-color);
      background: transparent;
      color: var(--primary-color);
      border-radius: 30px;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .filter-btn:hover, .filter-btn.active {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .filter-buttons {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 1rem;
      }

      .filter-btn {
        flex: 0 0 auto;
      }
    }
  `]
})
export class ProjectFilterComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  onCategorySelect(category: string) {
    this.categoryChange.emit(category);
  }
}