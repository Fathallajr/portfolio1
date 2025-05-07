import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  isVisible = false;
  private skillsSection: Element | null = null;
  private triggered = false;

  // Frontend skills
  frontendSkills: Skill[] = [
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
    { name: 'TypeScript', level: 80, icon: 'fab fa-js' },
    { name: 'Angular', level: 85, icon: 'fab fa-angular' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'Vue.js', level: 70, icon: 'fab fa-vuejs' },
    { name: 'SASS/SCSS', level: 85, icon: 'fab fa-sass' }
  ];

  // Backend skills
  backendSkills: Skill[] = [
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'Express', level: 75, icon: 'fab fa-node-js' },
    { name: 'MongoDB', level: 70, icon: 'fas fa-database' },
    { name: 'SQL', level: 65, icon: 'fas fa-database' },
    { name: 'PHP', level: 60, icon: 'fab fa-php' }
  ];

  // Other skills
  otherSkills: Skill[] = [
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    { name: 'GitHub', level: 90, icon: 'fab fa-github' },
    { name: 'Docker', level: 65, icon: 'fab fa-docker' },
    { name: 'Webpack', level: 70, icon: 'fas fa-box-open' },
    { name: 'Responsive Design', level: 90, icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', level: 75, icon: 'fas fa-pencil-ruler' }
  ];

  ngOnInit(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      this.skillsSection = document.getElementById('skills');
      this.checkScroll();
    }, 500);
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    if (this.triggered || !this.skillsSection) return;
    
    const rect = this.skillsSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    
    if (rect.top <= triggerPoint) {
      this.isVisible = true;
      this.triggered = true;
    }
  }
}
