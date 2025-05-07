import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    // Trigger animations after a short delay
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
  }
}
