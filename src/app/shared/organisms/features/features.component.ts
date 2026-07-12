import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { FeatureItemComponent } from '../../molecules/feature-item/feature-item.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, FeatureItemComponent],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  items = [
    { icon: 'hand-heart', title: 'Hecho a mano', text: 'Cada caja se corta, lija y arma una por una.' },
    { icon: 'truck', title: 'Entrega en tu ciudad', text: 'Coordinamos entrega o envío según tu ubicación.' },
    { icon: 'palette', title: 'Maderas a tu gusto', text: 'Elige acabado, grabado y tipografía del detalle.' },
    { icon: 'clock', title: 'Tiempos claros', text: 'Te decimos exactamente cuándo estará lista tu caja.' },
  ];
}