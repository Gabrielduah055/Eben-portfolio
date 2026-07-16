import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ABOUT } from '../../data/content.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, SectionHeaderComponent, CtaSectionComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  content = ABOUT;

  philosophyImages = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80',
  ];
}
