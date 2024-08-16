import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() source: string | null = 'https://avatar.iran.liara.run/public/42';
  @Input() alt: string = 'Avatar';
  @Input() width: string = '32';
  @Input() height: string = '32';
}
