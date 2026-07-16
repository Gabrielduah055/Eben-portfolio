import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { PROJECT_DETAIL } from '../../data/content.constants';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  private route  = inject(ActivatedRoute);
  private router = inject(Router);

  sections = PROJECT_DETAIL.sections;
  project: Project | undefined;
  nextProject: Project | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const index = PROJECTS.findIndex(p => p.slug === slug);
      if (index === -1) {
        this.router.navigate(['/work']);
        return;
      }
      this.project = PROJECTS[index];
      this.nextProject = PROJECTS[(index + 1) % PROJECTS.length];
    });
  }
}
