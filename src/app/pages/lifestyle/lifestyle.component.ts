import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { LIFESTYLE } from '../../data/content.constants';

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './lifestyle.component.html',
})
export class LifestyleComponent {
  content = LIFESTYLE;

  moments = [
    {
      title: 'Personal style',
      text: 'How I present myself is part of how I communicate: clean, considered, and confident.',
    },
    {
      title: 'New perspectives',
      text: 'Different places and everyday observations give me fresh visual references for content.',
    },
    {
      title: 'A human point of view',
      text: 'The best marketing still feels personal. Life away from the screen helps me keep that in mind.',
    },
  ];
}
