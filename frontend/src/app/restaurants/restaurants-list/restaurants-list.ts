import { Component, inject, input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucidePlus } from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { Restaurant } from '../restaurant-service';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  imports: [HlmItemImports, HlmIconImports, HlmSeparatorImports, HlmButtonImports],
  providers: [provideIcons({ lucideBadgeCheck, lucidePlus })],
  templateUrl: './restaurants-list.html',
  styleUrl: './restaurants-list.css',
})
export class RestaurantsList {
  readonly restaurants = input.required<Restaurant[]>();

  private router = inject(Router);

  createNewRestaurant() {
    this.router.navigate(['/restaurants', 'new-restaurant']);
  }
}
