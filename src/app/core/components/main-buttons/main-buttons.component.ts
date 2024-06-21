import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuItem } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'app-main-buttons',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenuItem,
    MatIconModule,
    MatMiniFabButton,
  ],
  templateUrl: './main-buttons.component.html',
})
export class MainButtonsComponent {
  constructor(public router: Router) {}
}
