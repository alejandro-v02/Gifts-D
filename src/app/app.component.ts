import { Component } from '@angular/core';
import { HeaderComponent } from './shared/organisms/header/header.component';
import { HeroComponent } from './shared/organisms/hero/hero.component';
import { AboutBrandComponent } from './shared/organisms/about-brand/about-brand.component';
import { GalleryComponent } from './shared/organisms/gallery/gallery.component';
import { CatalogComponent } from './shared/organisms/catalog/catalog.component';
import { HowItWorksComponent } from './shared/organisms/how-it-works/how-it-works.component';
import { FeaturesComponent } from './shared/organisms/features/features.component';
import { ContactComponent } from './shared/organisms/contact/contact.component';
import { FooterComponent } from './shared/organisms/footer/footer.component';
import { WhatsappFloatComponent } from './shared/organisms/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutBrandComponent,
    GalleryComponent,
    CatalogComponent,
    HowItWorksComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}