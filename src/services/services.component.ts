import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'House Planning',
      description: 'Expert House Planning & Architectural Design Customized to Your Vision.',
      image: 'assets/images/services/house-planning.webp',
      icon: 'fas fa-home'
    },
    {
      title: 'Architectural Design',
      description: 'Innovative Architectural Designs with Functional Excellence.',
      image: 'assets/images/services/architectural-design.webp',
      icon: 'fas fa-drafting-compass'
    },
    {
      title: 'Interior Design',
      description: 'Creative Interior Designs That Blend Comfort and Style.',
      image: 'assets/images/services/interior-design.webp',
      icon: 'fas fa-chair'
    },
    {
      title: 'With Material Construction',
      description: 'Premium-Quality Construction Materials.',
      image: 'assets/images/services/material-construction.webp',
      icon: 'fas fa-warehouse'
    },

    {
      title: 'Colony Development',
      description: 'End-to-End Colony and Community Development Solutions.',
      image: 'assets/images/services/colony-development.webp',
      icon: 'fas fa-tree-city'
    },
  ];
}