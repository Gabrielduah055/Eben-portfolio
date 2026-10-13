import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '../../../data/content.constants';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-wrap items-center" [class.gap-3]="size === 'sm'" [class.gap-4]="size === 'md'">
      <a
        *ngFor="let item of socials"
        [href]="item.url"
        target="_blank"
        rel="noopener noreferrer"
        [attr.aria-label]="item.label"
        [class]="showLabels
          ? 'inline-flex min-h-11 items-center gap-2 rounded-full border border-border-subtle bg-surface/70 px-4 py-2 text-sm font-semibold text-text-secondary transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-px'
          : 'icon-button'">
        <i [class]="item.icon" aria-hidden="true"></i>
        <span *ngIf="showLabels">{{ item.label }}</span>
      </a>
    </div>
  `,
})
export class SocialLinksComponent {
  @Input() size: 'sm' | 'md' = 'md';
  @Input() showLabels = false;

  socials = [
    { label: 'Instagram', icon: 'uil uil-instagram', url: SITE.social.instagram },
    { label: 'YouTube', icon: 'uil uil-youtube', url: SITE.social.youtube },
    { label: 'Threads', icon: 'uil uil-at', url: SITE.social.threads },
    { label: 'Facebook', icon: 'uil uil-facebook-f', url: SITE.social.facebook },
    { label: 'LinkedIn', icon: 'uil uil-linkedin-alt', url: SITE.social.linkedin },
  ];
}
