import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { SERVICES_DATA } from '../../data/services.data';
import { SERVICES } from '../../data/content.constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CtaSectionComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  content  = SERVICES;
  services = SERVICES_DATA;
}
