import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-step-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './step-item.component.html',
})
export class StepItemComponent {
  @Input() number = 1;
  @Input() icon = 'message-circle';
  @Input() title = '';
  @Input() text = '';
}