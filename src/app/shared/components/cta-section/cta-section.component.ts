import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CTA_DEFAULT } from '../../../data/content.constants';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <div class="shell">
        <div class="grid grid-cols-1 gap-8 rounded-2xl bg-accent p-8 text-[#f8f9fd] md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 class="max-w-2xl font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{{ heading }}</h2>
            <p class="mt-4 max-w-xl text-sm leading-7 text-[#e8edff]">{{ body }}</p>
          </div>
          <a [routerLink]="link" class="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f8f9fd] px-6 py-3 text-sm font-bold text-[#1b2f88] transition duration-300 hover:-translate-y-0.5 active:translate-y-px">
            {{ button }} <i class="uil uil-arrow-up-right"></i>
          </a>
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
