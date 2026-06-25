import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BaseService } from '../base-service';
import { tap } from 'rxjs';

export interface FoodMenu {
  name: string;
  uuid: string
}

export interface RestaurantFoodMenu {
  foodMenu: FoodMenu;
  position: number;
}

export interface Restaurant {
  id: number;
  name: string;
  uuid: string;
  restaurantFoodMenus: RestaurantFoodMenu[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService extends BaseService {
  private readonly restaurantsUrl = '/api/restaurants';

  private getRestaurants() {
    return this.httpClient.get<Restaurant[]>(this.restaurantsUrl);
  }

  private readonly _restaurants = rxResource({
    stream: () => this.getRestaurants(),
    defaultValue: [],
  });

  readonly restaurants = this._restaurants.asReadonly();

  loadRestaurants() {
    this._restaurants.reload();
  }

  createRestaurant(restaurant: Restaurant) {
    return this.httpClient.post(this.restaurantsUrl, restaurant).pipe(
      tap(() => {
        this.loadRestaurants();
      }),
    );
  }
}
