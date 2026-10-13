import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WORK } from '../../data/content.constants';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work.component.html',
})
export class WorkComponent {
  content = WORK;

  deliverables = [
    {
      icon: 'uil uil-calender',
      title: 'Social content plans',
      description: 'Platform-aware ideas, captions, posting direction, and simple content calendars.',
      className: 'lg:col-span-7 bg-accent text-[#f8f9fd]',
      bodyClass: 'text-[#e8edff]',
    },
    {
      icon: 'uil uil-palette',
      title: 'Canva campaign assets',
      description: 'Social posts, promotional graphics, ad layouts, flyers, and reusable templates.',
      className: 'lg:col-span-5 bg-surface',
      bodyClass: 'text-text-secondary',
    },
    {
      icon: 'uil uil-play-circle',
      title: 'Short-form video',
      description: 'Simple concepts, clean edits, text overlays, and social-ready video exports.',
      className: 'lg:col-span-5 bg-surface-el',
      bodyClass: 'text-text-secondary',
    },
    {
      icon: 'uil uil-envelope-edit',
      title: 'Email campaigns',
      description: 'Promotional emails and newsletters with clear copy, layout, and calls-to-action.',
      className: 'lg:col-span-7 bg-surface',
      bodyClass: 'text-text-secondary',
    },
    {
      icon: 'uil uil-pen',
      title: 'Promotional copy',
      description: 'Captions, headlines, campaign messages, and action-focused copy for digital channels.',
      className: 'lg:col-span-7 bg-surface',
      bodyClass: 'text-text-secondary',
    },
    {
      icon: 'uil uil-chart-growth',
      title: 'Basic reporting',
      description: 'A practical review of reach, engagement, clicks, and conversions to guide the next move.',
      className: 'lg:col-span-5 bg-accent/10',
      bodyClass: 'text-text-secondary',
    },
  ];
}
