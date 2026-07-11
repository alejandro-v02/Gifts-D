import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Gift, Heart, Cake, Package, Sparkles, Flower2,
  HandHeart, Truck, Palette, Clock, MessageCircle, Instagram, Facebook, Mail } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        Gift, Heart, Cake, Package, Sparkles, Flower2,
        HandHeart, Truck, Palette, Clock, MessageCircle, Instagram, Facebook, Mail
      })
    )
  ]
};