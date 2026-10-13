import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { CONTACT, SITE } from '../../data/content.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  content = CONTACT;
  site = SITE;
}
