import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firefly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firefly.component.html',
})
export class FireflyComponent {
  @Input() left = 50;
  @Input() size = 6;
  @Input() duration = 8;
  @Input() delay = 0;
}