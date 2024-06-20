import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [AvatarComponent, MatIcon],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'),
    );
    iconRegistry.addSvgIcon(
      'notifications',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/notifications.svg',
      ),
    );
  }
}
