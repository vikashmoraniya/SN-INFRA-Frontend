import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isSticky: boolean = false;
  isMenuOpen: boolean = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Initial check for sticky header — only runs in the browser
    if (this.isBrowser) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.isBrowser) {
      return;
    }
    this.isSticky = window.pageYOffset >= 50; // Adjust scroll threshold as needed
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}