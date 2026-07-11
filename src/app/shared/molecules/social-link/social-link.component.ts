import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './social-link.component.html',
})
export class SocialLinkComponent {
  @Input() icon: string = 'message-circle';
  @Input() label = '';
  @Input() href = '#';
}