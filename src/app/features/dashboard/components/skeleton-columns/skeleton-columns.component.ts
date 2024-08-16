import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-skeleton-columns',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './skeleton-columns.component.html',
  styleUrl: './skeleton-columns.component.scss',
})
export class SkeletonColumnsComponent {}
