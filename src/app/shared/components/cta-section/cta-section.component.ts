import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CTA_DEFAULT } from '../../../data/content.constants';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-surface border border-white/[0.08] rounded-2xl p-12 md:p-16 relative overflow-hidden">
          <!-- Decorative blur -->
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          <!-- Content -->
          <div class="relative z-10">
            <h2 class="text-2xl md:text-3xl font-medium text-text-primary mb-4 leading-tight">{{ heading }}</h2>
            <p class="text-text-secondary text-base leading-7 mb-8 max-w-xl mx-auto">{{ body }}</p>
            <a [routerLink]="link" class="btn-primary text-base px-8 py-3.5">{{ button }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {
  @Input() heading: string = CTA_DEFAULT.heading;
  @Input() body: string = CTA_DEFAULT.body;
  @Input() button: string = CTA_DEFAULT.button;
  @Input() link: string = CTA_DEFAULT.link;
}
