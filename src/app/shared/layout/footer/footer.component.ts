import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NAV, SITE, FOOTER } from '../../../data/content.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  site    = SITE;
  links   = NAV.links;
  footer  = FOOTER;
  year    = new Date().getFullYear();
}
