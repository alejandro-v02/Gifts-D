import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './whatsapp-float.component.html',
})
export class WhatsappFloatComponent {
  // Reemplaza con el número real, formato: código país + número, sin + ni espacios
  link = 'https://wa.me/57XXXXXXXXXX?text=Hola%2C%20quiero%20cotizar%20una%20caja';
}