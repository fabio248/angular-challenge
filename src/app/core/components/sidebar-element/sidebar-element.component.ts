import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-element',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidebar-element.component.html',
  styleUrl: './sidebar-element.component.scss',
})
export class SidebarElementComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() route!: string;

  constructor(public router: Router) {}
}
