import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollRotation = 0;
  shadowExpansion = 0;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollRotation = Math.min(window.scrollY * 0.04, 6);
    this.shadowExpansion = Math.min(window.scrollY * 0.03, 4);
  }
}
