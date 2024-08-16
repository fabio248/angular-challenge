import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { SidebarElementComponent } from '../sidebar-element/sidebar-element.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink,
    MatDivider,
    SidebarElementComponent,
    NgClass,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
