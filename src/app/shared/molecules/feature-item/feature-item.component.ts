import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './feature-item.component.html',
})
export class FeatureItemComponent {
  @Input() icon = 'sparkles';
  @Input() title = '';
  @Input() text = '';
}