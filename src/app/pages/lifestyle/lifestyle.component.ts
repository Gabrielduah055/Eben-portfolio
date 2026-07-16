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

  sections = [
    {
      label: 'Fitness & Training',
      images: ['/assets/photo4.jpg', '/assets/photo3.jpg', '/assets/photo2.jpg'],
      desc: 'Training keeps me sharp, focused, and disciplined. The habits I build in the gym are the same habits that make me effective as a marketer.',
    },
    {
      label: 'Dubai Life',
      images: ['/assets/photo3.jpg', '/assets/photo4.jpg', '/assets/photo1.jpg'],
      desc: "Dubai moves at a pace that energises me. It is a city of ambition, contrast, and constantly evolving culture, and it shapes how I think about brand and experience.",
    },
    {
      label: 'Style',
      images: ['/assets/photo5.jpg', '/assets/photo1.jpg', '/assets/photo2.jpg'],
      desc: 'Personal style is part of how I show up. It keeps the brand human, confident, and grounded in real life beyond the campaign calendar.',
    },
    {
      label: 'Personal Brand',
      images: [
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
      ],
      desc: 'Reading keeps my thinking sharp. Books give me language, perspective, and a deeper sense of how people make decisions.',
    },
    {
      label: 'Personal Moments',
      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      ],
      desc: 'The quieter side of life: beaches, gatherings with friends, music, and the small moments that keep me grounded.',
    },
  ];
}
