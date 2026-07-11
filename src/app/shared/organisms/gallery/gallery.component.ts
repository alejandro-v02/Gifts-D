import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { GalleryItemComponent } from '../../molecules/gallery-item/gallery-item.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, GalleryItemComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  // TODO: cuando tengan fotos reales, reemplazar "image" por "/galeria/nombre-foto.jpg"
  photos = [
    { image: 'https://loremflickr.com/500/500/giftbox,wedding', caption: 'Boda' },
    { image: 'https://loremflickr.com/500/500/giftbox,birthday', caption: 'Cumpleaños' },
    { image: 'https://loremflickr.com/500/500/giftbox,ribbon', caption: 'Caja sorpresa' },
    { image: 'https://loremflickr.com/500/500/giftbox,flowers', caption: 'Detalle floral' },
    { image: 'https://loremflickr.com/500/500/giftbox,corporate', caption: 'Empresarial' },
    { image: 'https://loremflickr.com/500/500/giftbox,gold', caption: 'Diseño personalizado' },
  ];
}