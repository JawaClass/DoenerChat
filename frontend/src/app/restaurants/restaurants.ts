import { Component, inject } from '@angular/core';
import { RestaurantService } from './restaurant-service';
import { RestaurantsCreateFirst } from './restaurants-create-first/restaurants-create-first';
import { RestaurantsList } from './restaurants-list/restaurants-list';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  imports: [RestaurantsCreateFirst, RestaurantsList, HlmSeparator, RouterOutlet],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.css',
})
export class Restaurants {
  private readonly restaurantService = inject(RestaurantService);

  readonly restaurants = this.restaurantService.restaurants;

  constructor() {
    this.restaurantService.loadRestaurants();
  }
}
