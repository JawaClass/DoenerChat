import { Injectable, signal, untracked } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BaseService } from '../../base-service';
import { Restaurant } from '../restaurant-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantDetailService extends BaseService {
  private readonly restaurantsUrl = '/api/restaurants';

  readonly uuid = signal<string | undefined>(undefined);

  private _getRestaurantByUuid(uuid: string) {
    const url = `${this.restaurantsUrl}/${uuid}`;
    return this.httpClient.get<Restaurant>(url);
  }

  private readonly _restaurant = rxResource({
    params: () => ({ uuid: this.uuid() }),
    stream: ({ params }) => (params.uuid ? this._getRestaurantByUuid(params.uuid) : of(null)),
    defaultValue: null,
  });

  readonly restaurant = this._restaurant.asReadonly();

  getRestaurantByUuid(uuid: string) {
    untracked(() => this.uuid.set(uuid));
    return this.restaurant;
  }
}
