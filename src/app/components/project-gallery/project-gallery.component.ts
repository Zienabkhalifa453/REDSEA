import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <div class="gallery-container" @fadeIn>
      <div class="main-image">
        <img [src]="images[selectedIndex]" [alt]="title" class="img-fluid">
        <div class="navigation">
          <button 
            class="nav-btn prev" 
            (click)="previousImage()"
            *ngIf="selectedIndex > 0"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button 
            class="nav-btn next" 
            (click)="nextImage()"
            *ngIf="selectedIndex < images.length - 1"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <div class="thumbnails">
        <div 
          *ngFor="let image of images; let i = index"
          class="thumbnail"
          [class.active]="i === selectedIndex"
          (click)="selectImage(i)"
        >
          <img [src]="image" [alt]="title + ' thumbnail ' + (i + 1)">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gallery-container {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .main-image {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    .navigation {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      pointer-events: none;
    }

    .nav-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255,255,255,0.9);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: auto;
      transition: all 0.3s ease;
      
      &:hover {
        background: white;
        transform: scale(1.1);
      }

      i {
        color: var(--primary-color);
        font-size: 1.2rem;
      }
    }

    .thumbnails {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }

    .thumbnail {
      aspect-ratio: 1;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
      opacity: 0.6;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        opacity: 1;
        box-shadow: 0 0 0 2px var(--primary-color);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `]
})
export class ProjectGalleryComponent {
  @Input() images: string[] = [];
  @Input() title: string = '';
  selectedIndex = 0;

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  previousImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  nextImage() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
  }
}