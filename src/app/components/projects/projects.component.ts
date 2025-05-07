import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  visible: boolean;
}

interface Filter {
  label: string;
  value: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  isVisible = false;
  private projectsSection: Element | null = null;
  private triggered = false;
  
  activeFilter = 'all';
  
  filters: Filter[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'UI/UX', value: 'ui-ux' }
  ];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with product catalog, cart, and checkout functionality.',
      image: 'assets/images/project1.jpg',
      category: ['web'],
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com/ecommerce',
      codeUrl: 'https://github.com/yourusername/ecommerce',
      visible: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
      image: 'assets/images/project2.jpg',
      category: ['web', 'mobile'],
      technologies: ['React', 'Firebase', 'Redux'],
      liveUrl: 'https://example.com/taskapp',
      codeUrl: 'https://github.com/yourusername/taskapp',
      visible: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern animations.',
      image: 'assets/images/project3.jpg',
      category: ['web', 'ui-ux'],
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      liveUrl: 'https://example.com/portfolio',
      codeUrl: 'https://github.com/yourusername/portfolio',
      visible: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts for locations worldwide.',
      image: 'assets/images/project4.jpg',
      category: ['web'],
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      liveUrl: 'https://example.com/weather',
      codeUrl: 'https://github.com/yourusername/weather',
      visible: true
    },
    {
      id: 5,
      title: 'Fitness Tracker App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness goals with progress visualization.',
      image: 'assets/images/project5.jpg',
      category: ['mobile'],
      technologies: ['React Native', 'Firebase', 'Charts.js'],
      liveUrl: 'https://example.com/fitness',
      codeUrl: 'https://github.com/yourusername/fitness',
      visible: true
    },
    {
      id: 6,
      title: 'UI Component Library',
      description: 'A collection of reusable UI components designed for modern web applications.',
      image: 'assets/images/project6.jpg',
      category: ['ui-ux'],
      technologies: ['Storybook', 'React', 'Styled Components'],
      liveUrl: 'https://example.com/ui-library',
      codeUrl: 'https://github.com/yourusername/ui-library',
      visible: true
    }
  ];
  
  filteredProjects: Project[] = this.projects;
  
  ngOnInit(): void {
    // Initialize filtered projects
    this.filteredProjects = [...this.projects];
    
    // Wait for DOM to be ready
    setTimeout(() => {
      this.projectsSection = document.getElementById('projects');
      this.checkScroll();
    }, 500);
  }
  
  @HostListener('window:scroll', [])
  checkScroll(): void {
    if (this.triggered || !this.projectsSection) return;
    
    const rect = this.projectsSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    
    if (rect.top <= triggerPoint) {
      this.isVisible = true;
      this.triggered = true;
    }
  }
  
  filterProjects(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredProjects = this.projects.map(project => ({ ...project, visible: true }));
    } else {
      this.filteredProjects = this.projects.map(project => ({
        ...project,
        visible: project.category.includes(category)
      }));
    }
  }
}
