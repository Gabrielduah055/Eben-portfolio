import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-12" [class]="align === 'center' ? 'text-center' : ''">
      <span *ngIf="label" class="label  block mb-3">{{ label }}</span>
      <p class="text-2xl md:text-3xl font-medium text-text-primary mb-2 leading-tight ">{{ heading }}</p>
      <p *ngIf="subtext" class="text-text-secondary text-base leading-7 max-w-2xl" [class.mx-auto]="align === 'center'">{{ subtext }}</p>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input() label   = '';
  @Input() heading = '';
  @Input() subtext = '';
  @Input() align: 'left' | 'center' = 'left';
}
