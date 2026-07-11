import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { SocialLinkComponent } from '../../molecules/social-link/social-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, SocialLinkComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  socials = [
    { icon: 'message-circle', label: 'WhatsApp', href: 'https://wa.me/57XXXXXXXXXX' },
    { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/tu_usuario' },
    { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com/tu_pagina' },
    { icon: 'tiktok', label: 'TikTok', href: 'https://tiktok.com/@tu_usuario' },
    { icon: 'mail', label: 'Correo', href: 'mailto:hola@cajaydetalle.com' },
  ];
}