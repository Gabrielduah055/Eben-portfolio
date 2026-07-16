import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../../models/testimonial.model';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card smooth-card p-7 flex flex-col gap-5 hover:border-white/20 transition-all duration-300">
      <!-- Quote icon -->
      <svg class="w-8 h-8 text-accent/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
      <p class="text-text-secondary text-base leading-relaxed flex-1">"{{ testimonial.text }}"</p>
      <div class="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <img [src]="testimonial.avatar" [alt]="testimonial.name"
          class="w-10 h-10 rounded-full object-cover border border-white/10">
        <div>
          <p class="text-text-primary text-sm font-semibold">{{ testimonial.name }}</p>
          <p class="text-text-muted text-xs">{{ testimonial.role }}, {{ testimonial.company }}</p>
        </div>
      </div>
    </div>
  `,
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
