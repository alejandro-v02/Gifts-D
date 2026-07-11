import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() href = '#';
  @Input() label = '';
}