import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    // Add click event listeners to filter buttons
    this.setupFilterButtons();
  }
  
  private setupFilterButtons(): void {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.projects-filter button');
    
    // Add click event listeners to each button
    filterButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
      });
    });
  }
}
