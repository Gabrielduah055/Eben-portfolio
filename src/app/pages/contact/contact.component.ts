import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { CONTACT, SITE } from '../../data/content.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SocialLinksComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  content = CONTACT;
  site    = SITE;
  submitted = signal(false);
  sending   = signal(false);

  form = new FormBuilder().group({
    name:        ['', [Validators.required, Validators.minLength(2)]],
    email:       ['', [Validators.required, Validators.email]],
    company:     [''],
    projectType: ['', Validators.required],
    budget:      ['', Validators.required],
    message:     ['', [Validators.required, Validators.minLength(20)]],
  });

  get f() { return this.form.controls; }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
    }, 1500);
  }

  reset() {
    this.form.reset();
    this.submitted.set(false);
  }
}
