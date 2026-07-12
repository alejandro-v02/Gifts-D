import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionTitleComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  photos = [
    { image: '/galeria/caja-01.png', caption: 'Desayuno sorpresa' },
    { image: '/galeria/caja-02.png', caption: 'Ancheta' },
    { image: '/galeria/caja-03.png', caption: 'Caja de flores' },
    { image: '/galeria/caja-04.png', caption: 'Botellas' },
    { image: '/galeria/caja-05.png', caption: 'Detalle personalizado' },
    { image: '/galeria/caja-06.png', caption: 'Recordatorio' },
  ];

  activeIndex = signal(0);

  goTo(i: number) {
    this.activeIndex.set(i);
    this.scrollToActive();
  }

  next() {
    this.activeIndex.set((this.activeIndex() + 1) % this.photos.length);
    this.scrollToActive();
  }

  prev() {
    this.activeIndex.set((this.activeIndex() - 1 + this.photos.length) % this.photos.length);
    this.scrollToActive();
  }

  private scrollToActive() {
    const track = document.getElementById('gallery-track');
    if (!track) return;
    const child = track.children[this.activeIndex()] as HTMLElement;
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}