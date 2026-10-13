import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ABOUT } from '../../data/content.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, CtaSectionComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  content = ABOUT;
}
