import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule], // ✅ Import CommonModule here
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  words = ['Developer', 'Dancer', 'Full-Stack Engineer', 'Innovator'];
  currentWordIndex = 0;
  displayText = '';
  isDeleting = false;
  speed = 150; // Typing speed in ms
  isMobile = window.innerWidth <= 768;
  navOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const dynamicText = document.getElementById('dynamic-text');
    if (!dynamicText) return;

    let fullText = this.words[this.currentWordIndex];

    const typeEffect = setInterval(() => {
      if (this.isDeleting) {
        this.displayText = fullText.substring(0, this.displayText.length - 1);
      } else {
        this.displayText = fullText.substring(0, this.displayText.length + 1);
      }

      dynamicText.innerHTML = this.displayText;

      if (!this.isDeleting && this.displayText === fullText) {
        setTimeout(() => (this.isDeleting = true), 1000); // Pause before deleting
      } else if (this.isDeleting && this.displayText === '') {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }

      if (this.isDeleting) {
        clearInterval(typeEffect);
        setTimeout(() => this.animateText(), 100);
      } else {
        clearInterval(typeEffect);
        setTimeout(() => this.animateText(), this.speed);
      }
    }, this.speed);
  }

  navigateTo(section: string) {
    this.router.navigate(['/', section]);
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
