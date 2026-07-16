import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifestyle-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group smooth-card relative overflow-hidden rounded-xl aspect-square cursor-pointer">
      <img [src]="image" [alt]="label"
        class="w-full h-full object-cover image-hover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span class="text-white text-sm font-semibold">{{ label }}</span>
      </div>
      <div class="absolute top-3 left-3">
        <span class="bg-black/50 backdrop-blur-sm text-white/80 text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">{{ label }}</span>
      </div>
    </div>
  `,
})
export class LifestyleCardComponent {
  @Input() image = '';
  @Input() label = '';
}
