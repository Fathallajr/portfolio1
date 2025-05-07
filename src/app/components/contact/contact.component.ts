import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {  
  isVisible = false;

  ngOnInit() {
    // Add scroll event listener to check when component is in viewport
    window.addEventListener('scroll', this.checkVisibility.bind(this));
    // Check on initial load
    this.checkVisibility();
  }

  checkVisibility() {
    const element = document.querySelector('.contact');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        this.isVisible = true;
      }
    }
  }

}
