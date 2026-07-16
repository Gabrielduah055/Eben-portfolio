import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { LifestyleCardComponent } from '../../shared/components/lifestyle-card/lifestyle-card.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { PROJECTS } from '../../data/projects.data';
import { TESTIMONIALS } from '../../data/testimonials.data';
import { SERVICES_DATA } from '../../data/services.data';
import { HOME } from '../../data/content.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule,
    SectionHeaderComponent, ProjectCardComponent,
    TestimonialCardComponent, LifestyleCardComponent, CtaSectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  content      = HOME;
  featuredWork = PROJECTS.filter(p => p.featured);
  testimonials = TESTIMONIALS;
  services     = SERVICES_DATA.slice(0, 4);

  lifestyleItems = [
    { image: '/assets/photo4.jpg', label: 'Fitness' },
    { image: '/assets/photo3.jpg', label: 'Dubai' },
    { image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', label: 'Reading' },
    { image: '/assets/photo5.jpg', label: 'Style' },
    { image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', label: 'Friends' },
    { image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80', label: 'Music' },
  ];
}
