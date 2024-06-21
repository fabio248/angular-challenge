import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { MainButtonsComponent } from './core/components/main-buttons/main-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SearchBarComponent,
    MainButtonsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-challenge';
}
