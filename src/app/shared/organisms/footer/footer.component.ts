import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();
}