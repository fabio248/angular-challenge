import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggle,
    MatMiniFabButton,
    MatIconModule,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-challenge';
}
