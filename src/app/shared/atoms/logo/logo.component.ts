import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}