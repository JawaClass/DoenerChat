import { Component, input } from '@angular/core';
import { RestaurantFoodMenu } from '../../restaurant-service';

@Component({
  selector: 'app-menu-display-item-list',
  imports: [],
  templateUrl: './menu-display-item-list.html',
  styleUrl: './menu-display-item-list.css',
})
export class MenuDisplayItemList {
  readonly menus = input.required<RestaurantFoodMenu[]>();
}
