import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmField, HlmFieldDescription, HlmFieldGroup } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { AddressData, AddressForm, addressSchema } from '../../address-form/address-form';
import { RestaurantService } from '../restaurant-service';
import { finalize } from 'rxjs';

interface RestaurantData {
  name: string;
  address: AddressData;
}
@Component({
  selector: 'app-create-new-restaurant',
  imports: [
    HlmFieldGroup,
    HlmField,
    HlmButtonImports,
    FormField,
    HlmInputImports,
    AddressForm,
    HlmSeparator,
  ],
  templateUrl: './create-new-restaurant.html',
  styleUrl: './create-new-restaurant.css',
})
export class CreateNewRestaurant {
  private restaurantService = inject(RestaurantService);
  private readonly restaurantModel = signal<RestaurantData>({
    name: '',
    address: {
      city: '',
      street: '',
      streetNo: '',
      zipCode: '',
    },
  });

  readonly uiFreezed = signal(false);

  readonly restraurantForm = form(this.restaurantModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Bitte Feld ausfüllen' });
    addressSchema(schemaPath.address);
  });

  createNewRestaurant() {
    if (this.uiFreezed() || !this.restraurantForm().valid()) {
      return;
    }
    const restaurant = this.restaurantModel();
    this.uiFreezed.set(true);
    this.restaurantService
      .createRestaurant({ id: -1, ...restaurant, uuid: '', restaurantFoodMenus: [] })
      .pipe(finalize(() => this.uiFreezed.set(false)))
      .subscribe();
  }
}
