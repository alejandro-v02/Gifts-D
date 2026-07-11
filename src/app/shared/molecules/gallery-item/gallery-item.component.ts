import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './gallery-item.component.html',
})
export class GalleryItemComponent {
  @Input() image = '';
  @Input() caption = '';
}