import { Component, computed, inject } from '@angular/core';
import { LoginService } from '../../user-auth-screen/login/login-service';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurants-create-first',
  imports: [],
  templateUrl: './restaurants-create-first.html',
  styleUrl: './restaurants-create-first.css',
})
export class RestaurantsCreateFirst {
  private readonly loginService = inject(LoginService);
  private readonly restaurantService = inject(RestaurantService);

  readonly user = computed(() => {
    const user = this.loginService.loggedInUser();
    if (user) {
      const parts = user.split('@');
      return parts[0];
    }
    return '';
  });

  createRestaurant() {
    this.restaurantService.createRestaurant({ id: -1, name: 'Mein erstes Restaurant' }).subscribe();
  }
}
