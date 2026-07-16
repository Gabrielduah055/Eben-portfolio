import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <a [routerLink]="['/work', project.slug]"
      class="group block card smooth-card hover:border-white/20 overflow-hidden">
      <!-- Image -->
      <div class="relative overflow-hidden h-52">
        <img
          [src]="project.image"
          [alt]="project.title"
          class="w-full h-full object-cover image-hover">
        <div class="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span class="text-white text-xs font-semibold uppercase tracking-wider">View Case Study →</span>
        </div>
        <!-- Category badge -->
        <span class="absolute top-3 left-3 bg-accent/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{{ project.category }}</span>
      </div>
      <!-- Content -->
      <div class="p-5">
        <h3 class="text-text-primary font-semibold text-base mb-1 group-hover:text-accent transition-colors duration-200 leading-snug">{{ project.title }}</h3>
        <p class="text-text-muted text-xs mb-3">{{ project.client }} · {{ project.industry }}</p>
        <p class="text-text-secondary text-sm leading-relaxed line-clamp-2">{{ project.summary }}</p>
        <div class="flex flex-wrap gap-1.5 mt-4">
          <span *ngFor="let service of project.services.slice(0, 2)"
            class="text-xs text-text-muted border border-white/[0.08] rounded-full px-2.5 py-0.5">
            {{ service }}
          </span>
        </div>
      </div>
    </a>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
