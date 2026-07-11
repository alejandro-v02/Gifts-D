import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-icon-badge',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon-badge.component.html',
})
export class IconBadgeComponent {
  @Input() icon: string = 'gift';
  @Input() size: number = 22;
}