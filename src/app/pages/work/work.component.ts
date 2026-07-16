import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { PROJECTS } from '../../data/projects.data';
import { WORK } from '../../data/content.constants';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './work.component.html',
})
export class WorkComponent {
  content  = WORK;
  filters  = WORK.filters;
  allProjects = PROJECTS;

  activeFilter = signal<string>('All');

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.tags.includes(f));
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
