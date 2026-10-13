import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { SERVICES_DATA } from '../../data/services.data';
import { HOME } from '../../data/content.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, SocialLinksComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  content = HOME;
  services = SERVICES_DATA.slice(0, 6);
}
