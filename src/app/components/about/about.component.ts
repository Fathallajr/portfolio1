import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  isVisible = false;
  private aboutSection: Element | null = null;
  private triggered = false;

  ngOnInit(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      this.aboutSection = document.getElementById('about');
      this.checkScroll();
    }, 500);
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    if (this.triggered || !this.aboutSection) return;
    
    const rect = this.aboutSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    
    if (rect.top <= triggerPoint) {
      this.isVisible = true;
      this.triggered = true;
    }
  }
}
