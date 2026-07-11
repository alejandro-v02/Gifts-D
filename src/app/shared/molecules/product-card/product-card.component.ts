import { Component, Input } from '@angular/core';
import { IconBadgeComponent } from '../../atoms/icon-badge/icon-badge.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [IconBadgeComponent],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() icon = 'gift';
  @Input() title = '';
  @Input() description = '';
}