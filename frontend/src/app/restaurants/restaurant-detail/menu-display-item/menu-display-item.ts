import { Component, inject, input } from '@angular/core';
import { RestaurantFoodMenu } from '../../restaurant-service';
import { HlmCardImports } from '@spartan-ng/helm/card';

import { HlmCard, HlmCardHeader, HlmCardFooter } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-display-item',
  imports: [HlmCardImports, HlmCard, HlmCardHeader, HlmCardFooter, HlmButtonImports],
  templateUrl: './menu-display-item.html',
  styleUrl: './menu-display-item.css',
})
export class MenuDisplayItem {
  readonly menu = input.required<RestaurantFoodMenu>();

  private readonly router = inject(Router);

  openMenu() {
    this.router.navigate(['menu', this.menu().foodMenu.uuid]);
  }
}
