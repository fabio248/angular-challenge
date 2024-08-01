import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-avatar-label',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './avatar-label.component.html',
  styleUrl: './avatar-label.component.css',
})
export class AvatarLabelComponent {
  @Input() avatar!: string;
  @Input() name!: string;
}
