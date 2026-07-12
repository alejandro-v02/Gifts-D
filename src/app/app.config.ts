import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Gift, Heart, Cake, Package, Sparkles, Flower2,
  HandHeart, Truck, Palette, Clock, MessageCircle, Instagram, Facebook, Mail,
  Menu, X, Hammer, ChevronLeft, ChevronRight } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        Gift, Heart, Cake, Package, Sparkles, Flower2,
        HandHeart, Truck, Palette, Clock, MessageCircle, Instagram, Facebook, Mail,
        Menu, X, Hammer, ChevronLeft, ChevronRight
      })
    )
  ]
};