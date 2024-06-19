import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() source!: string;
  @Input() alt: string = 'Avatar';
  @Input() width: string = '32';
  @Input() height: string = '32';
}
