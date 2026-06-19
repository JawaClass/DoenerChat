import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root',
})
export class MealService extends BaseService {
  private readonly mealsUrl = '/api/main-meals';

  getMeals() {
    return this.httpClient.get(this.mealsUrl);
  }
}
