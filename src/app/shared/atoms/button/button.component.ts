import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'ghost' = 'primary';
  @Input() href = '';
  @Input() external = false; // true solo para links que salen del sitio (WhatsApp, redes, etc.)
}