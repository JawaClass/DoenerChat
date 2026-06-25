import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideDoorOpen, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { Restaurant } from '../restaurant-service';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
  selector: 'app-restaurants-list',
  imports: [
    HlmItemImports,
    HlmIconImports,
    HlmSeparatorImports,
    HlmButtonImports,
    NgScrollbarModule,
    HlmDropdownMenuImports,
  ],
  providers: [provideIcons({ lucideBadgeCheck, lucidePlus, lucideDoorOpen })],
  templateUrl: './restaurants-list.html',
  styleUrl: './restaurants-list.css',
})
export class RestaurantsList {
  readonly restaurants = input.required<Restaurant[]>();

  private router = inject(Router);

  createNewRestaurant() {
    this.router.navigate(['/restaurants', 'new-restaurant']);
  }

  openRestaurant(r: Restaurant) {
    console.log('open restaurant', r);

    this.router.navigate(['/restaurants', r.uuid]);
  }
}
