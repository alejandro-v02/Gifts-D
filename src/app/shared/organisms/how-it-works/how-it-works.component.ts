import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { StepItemComponent } from '../../molecules/step-item/step-item.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, StepItemComponent],
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  steps = [
    { icon: 'message-circle', title: 'Escríbenos', text: 'Cuéntanos la ocasión, cuántas cajas necesitas y tu presupuesto.' },
    { icon: 'palette', title: 'Diseñamos juntos', text: 'Te proponemos colores, listones y materiales según tu idea.' },
    { icon: 'package', title: 'Armamos tu caja', text: 'Preparamos cada caja a mano con los detalles acordados.' },
    { icon: 'truck', title: 'La recibes', text: 'Coordinamos entrega o envío en la fecha que necesites.' },
  ];
}