import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { NavLinkComponent } from '../../molecules/nav-link/nav-link.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavLinkComponent, ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}