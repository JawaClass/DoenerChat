import { Component, input } from '@angular/core';
import { BasketMenuItemGroup } from '../order-selection-service';
import { BasketItemDisplay } from "../basket-item-display/basket-item-display";

@Component({
  selector: 'app-back-item-group-display',
  imports: [BasketItemDisplay],
  templateUrl: './back-item-group-display.html',
  styleUrl: './back-item-group-display.css',
})
export class BackItemGroupDisplay {
  readonly item = input.required<BasketMenuItemGroup>()
}
