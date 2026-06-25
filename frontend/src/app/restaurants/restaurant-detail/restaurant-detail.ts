import { Component, computed, inject, input } from '@angular/core';
import { RestaurantDetailService } from './restaurant-details-service';
import { RestaurantFoodMenu } from '../restaurant-service';
import { MenuDisplayItem } from './menu-display-item/menu-display-item';
import { HlmCard, HlmCardHeader, HlmCardFooter } from '@spartan-ng/helm/card';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HorizontalScrollDirective } from '../../horizontal-scroll-directive';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
  selector: 'app-restaurant-detail',
  imports: [
    MenuDisplayItem,
    HlmCard,
    HlmCardHeader,
    HlmCardFooter,
    HlmSeparator,
    NgIcon,
    HorizontalScrollDirective,
    HlmDropdownMenuImports,
    HlmScrollAreaImports,
    NgScrollbarModule,
  ],

  providers: [provideIcons({ lucidePlus })],
  templateUrl: './restaurant-detail.html',
  styleUrl: './restaurant-detail.css',
})
export class RestaurantDetail {
  // restaurant uiid from url
  readonly uuid = input.required<string>();

  private restaurantDetailService = inject(RestaurantDetailService);

  readonly restaurant = computed(() =>
    this.restaurantDetailService.getRestaurantByUuid(this.uuid()),
  );

  readonly menus = computed(
    () =>
      // this.restaurant().value()?.restaurantFoodMenus ||
      [
        { foodMenu: { name: 'Monday Menu' }, position: 1 },
        { foodMenu: { name: 'Tuesday Menu' }, position: 1 },
        { foodMenu: { name: 'Wednesday Menu' }, position: 1 },
        { foodMenu: { name: 'Thursday Menu' }, position: 1 },
        { foodMenu: { name: 'Friday Menu' }, position: 1 },
        { foodMenu: { name: 'Saturday Menu' }, position: 1 },
        { foodMenu: { name: 'Sunday Menu' }, position: 1 },
      ] as RestaurantFoodMenu[],
  );
}
