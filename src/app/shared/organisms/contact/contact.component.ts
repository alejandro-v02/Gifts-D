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
    { icon: 'message-circle', label: 'WhatsApp', href: '', badgeStyle: 'background:#25D366' },
    { icon: 'instagram', label: 'Instagram', href: '', badgeStyle: 'background:linear-gradient(45deg,#833AB4,#C13584,#FD1D1D,#FCAF45)' },
    { icon: 'facebook', label: 'Facebook', href: '', badgeStyle: 'background:#1877F2' },
    { icon: 'tiktok', label: 'TikTok', href: '', badgeStyle: 'background:#000000' },
    { icon: 'mail', label: 'Correo', href: '', badgeStyle: 'background:#5C3A21' },
  ];
}