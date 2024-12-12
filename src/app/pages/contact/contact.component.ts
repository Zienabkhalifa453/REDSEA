import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '@app/shared/services/api.service';
import { fadeIn } from '@app/shared/utils/animation.utils';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeIn],
  template: `
    <div class="contact-page py-5" @fadeIn>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="section-title">Contact Us</h2>
        <p class="mb-4">Get in touch with us for any inquiries about our services or ongoing projects.</p>
        
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="mb-3">
            <label for="name" class="form-label">Name *</label>
            <input 
              type="text" 
              class="form-control" 
              id="name" 
              formControlName="name"
            
            >
            <div class="invalid-feedback">
              Name is required
            </div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email *</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              formControlName="email"
         
            >
            <div class="invalid-feedback">
              Email is required
            </div>
            <div class="invalid-feedback">
              Please enter a valid email
            </div>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input 
              type="tel" 
              class="form-control" 
              id="phone" 
              formControlName="phone"
            >
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">Subject *</label>
            <input 
              type="text" 
              class="form-control" 
              id="subject" 
              formControlName="subject"
            
            >
            <div class="invalid-feedback">
              Subject is required
            </div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message *</label>
            <textarea 
              class="form-control" 
              id="message" 
              rows="5" 
              formControlName="message"
            
            ></textarea>
            <div class="invalid-feedback">
              Message is required
            </div>
          </div>

          <button 
            type="submit" 
            class="btn btn-primary"
            [disabled]="loading"
          >
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
            Send Message
          </button>
        </form>
      </div>

      <div class="col-lg-6">
        <div class="contact-info mt-5 mt-lg-0">
          <div class="info-card mb-4 p-4">
            <h3><i class="fas fa-map-marker-alt me-2"></i> Our Location</h3>
            <p>Cairo, Egypt</p>
          </div>

          <div class="info-card mb-4 p-4">
            <h3><i class="fas fa-phone me-2"></i> Phone</h3>
            <p>+20 123 456 789</p>
          </div>

          <div class="info-card mb-4 p-4">
            <h3><i class="fas fa-envelope me-2"></i> Email</h3>
            <p>inforedseaconstruction.com</p>
          </div>

          <div class="info-card p-4">
            <h3><i class="fas fa-clock me-2"></i> Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styles: [`
    .contact-page {
      background-color: var(--light-bg);
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .info-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h3 {
        color: var(--primary-color);
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 0;
        color: var(--text-color);
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.apiService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = false;
        this.contactForm.reset();
        // Show success message (you can use a toast service here)
        alert('Message sent successfully!');
      },
      error: (error) => {
        this.loading = false;
        // Show error message
        alert('An error occurred. Please try again.');
        console.error('Error submitting form:', error);
      }
    });
  }
}