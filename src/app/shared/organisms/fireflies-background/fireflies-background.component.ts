import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireflyComponent } from '../../atoms/firefly/firefly.component';

@Component({
  selector: 'app-fireflies-background',
  standalone: true,
  imports: [CommonModule, FireflyComponent],
  templateUrl: './fireflies-background.component.html',
})
export class FirefliesBackgroundComponent {
  fireflies = Array.from({ length: 25 }, () => ({
    left: Math.random() * 100,
    size: 3 + Math.random() * 5,
    duration: 6 + Math.random() * 10,
    delay: Math.random() * 10,
  }));
}