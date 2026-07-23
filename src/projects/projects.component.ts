import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  location: string;
  category: string;
  plot: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Residential',
      location: 'Limbodi, Indore',
      category: 'Residential',
      plot: '20 X 50',
      description: 'Luxury villa elevation featuring contemporary architecture, premium finishes, spacious balconies, and elegant landscaping for modern living.',
      image: '/assets/images/projects/Elevation001.webp'
    },
    {
      title: 'Residential',
      location: 'Vijay Nagar, Indore',
      category: 'Residential',
      plot: '30 X 60',
      description: 'Modern luxury villa elevation with premium finishes, spacious balconies, and contemporary architecture for elegant residential living.',
      image: '/assets/images/projects/Elevation002.webp'
    },
    {
      title: 'Modern Apartment Building',
      location: 'Countywalk, Indore',
      category: 'Residential',
      plot: '30 X 50',
      description: 'Contemporary villa elevation showcasing modern architecture, premium exteriors, elegant balconies, and functional residential design excellence.',
      image: '/assets/images/projects/Elevation003.webp'
    },
    {
      title: 'Commercial Duplex',
      location: 'Ujjain',
      category: 'Commercial',
      plot: '80 X 50',
      description: 'Spacious modular duplex with modern construction.',
      image: '/assets/images/projects/Elevation004.webp'
    },
    {
      title: 'Farm House',
      location: 'Indore',
      category: 'Colony Development',
      plot: '100 X 100',
      description: 'Sustainable housing development with green spaces.',
      image: '/assets/images/projects/Elevation005.webp'
    },
    {
      title: 'Residential',
      location: 'OmKareshwar',
      category: 'Residential',
      plot: '22 X 62',
      description: 'Unique architectural design for a specious.',
      image: '/assets/images/projects/Elevation006.webp'
    },
    {
      title: 'Interior',
      location: 'Indore',
      category: 'Interior',
      plot: '30 X 60',
      description: 'Double height living room with modern furniture and lighting',
      image: '/assets/images/projects/Interior001.webp'
    },
    {
      title: 'Interior',
      location: 'Indore',
      category: 'Interior',
      plot: '30 X 60',
      description: 'Modern italian theme bedroom architectural design.',
      image: '/assets/images/projects/interior002.webp'
    },
    {
      title: 'Interior',
      location: 'Indore',
      category: 'Interior',
      plot: '30 X 60',
      description: 'Modular ice land kitchen',
      image: '/assets/images/projects/interior003.webp'
    },
    {
      title: 'Interior',
      location: 'Indore',
      category: 'Interior',
      plot: '30 X 60',
      description: 'Modular walking warderobe with dressing room.',
      image: '/assets/images/projects/interior004.webp'
    },
    {
      title: 'Interior',
      location: 'Indore',
      category: 'Interior',
      plot: '30 X 60',
      description: 'Modular living hall with TV unit',
      image: '/assets/images/projects/interior005.webp'
    },
    {
      title: 'Ongoing Projects',
      location: 'Indore',
      category: 'Ongoing Projects',
      plot: '100 X 100',
      description: 'Commercial complex bulding in indore for corporate offices.',
      image: '/assets/images/projects/IMG_3830.webp'
    },
    {
      title: 'Ongoing Projects',
      location: 'Indore',
      category: 'Ongoing Projects',
      plot: '80 X 50',
      description: 'Residential building multi project in indore.',
      image: '/assets/images/projects/IMG_3835.webp'
    },
    {
      title: 'Ongoing Projects',
      location: 'Indore',
      category: 'Ongoing Projects',
      plot: '30 X 60',
      description: 'Modular banglow residential construction in indore',
      image: '/assets/images/projects/IMG_3836.webp'
    },
  ];

  filteredProjects: Project[] = this.projects;
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Completed Projects', 'Residential', 'Commercial', 'Interior', 'Villa', 'Ongoing Projects'];
  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else if (category === 'Completed Projects') {
      // Everything that is NOT currently ongoing counts as completed
      this.filteredProjects = this.projects.filter(
        (project: Project) => project.category !== 'Ongoing Projects'
      );
    } else {
      // Handles Residential, Commercial, Interior, Villa, Ongoing Projects, etc.
      this.filteredProjects = this.projects.filter(
        (project: Project) => project.category === category
      );
    }
  }

  // filterProjects(category: string) {
  //   this.selectedCategory = category;
  //   if (category === 'All') {
  //     this.filteredProjects = this.projects;
  //   } else if (category === 'Completed Projects') {
  //     // Assuming all current projects are completed for now
  //     this.filteredProjects = this.projects;
  //   } else if (category === 'Residential') {
  //     // Placeholder for ongoing projects logic
  //     this.filteredProjects = this.projects.filter(project => project.category !== 'Residential');
  //   }
  //   else if (category === 'Commercial') {
  //     // Placeholder for ongoing projects logic
  //     this.filteredProjects = this.projects.filter(project => project.category !== 'Commercial');
  //   }
  //   else if (category === 'Interior') {
  //     // Placeholder for ongoing projects logic
  //     this.filteredProjects = this.projects.filter(project => project.category !== 'Interior');
  //   }
  //   else if (category === 'Villa') {
  //     // Placeholder for ongoing projects logic
  //     this.filteredProjects = this.projects.filter(project => project.category !== 'Villa');
  //   } 
  //   else if (category === 'Ongoing Projects') {
  //     // Placeholder for ongoing projects logic
  //     this.filteredProjects = this.projects.filter(project => project.category !== 'Ongoing Projects');
  //   } 
  //   else {
  //     this.filteredProjects = this.projects.filter(project => project.category === category);
  //   }
  // }
}
