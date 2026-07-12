import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProductCardComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  products = [
    { icon: 'heart', title: 'Cajas para bodas', description: 'Detalles para invitados en madera clara con grabados personalizados.' },
    { icon: 'cake', title: 'Cajas de cumpleaños', description: 'Diseños únicos con nombre e iniciales talladas.' },
    { icon: 'gift', title: 'Cajas sorpresa', description: 'Con compartimentos para chocolates, notas y pequeños regalos.' },
    { icon: 'flower-2', title: 'Cajas florales', description: 'Diseñadas para acompañar arreglos y ramos.' },
    { icon: 'package', title: 'Cajas corporativas', description: 'Para regalos empresariales y detalles de fin de año.' },
    { icon: 'sparkles', title: 'Diseños personalizados', description: 'Tú traes la idea, nosotros la hacemos caja.' },
  ];
}