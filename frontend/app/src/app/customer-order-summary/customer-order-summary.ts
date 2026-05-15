import { Component, inject } from '@angular/core';
import { OrderSelectionService } from '../order-selection-service';
import { BasketItemDisplay } from "../basket-item-display/basket-item-display";
import { BackItemGroupDisplay } from "../back-item-group-display/back-item-group-display";

@Component({
  selector: 'app-customer-order-summary',
  imports: [BasketItemDisplay, BackItemGroupDisplay],
  templateUrl: './customer-order-summary.html',
  styleUrl: './customer-order-summary.css',
})
export class CustomerOrderSummary {

  private readonly service = inject(OrderSelectionService)

  readonly basket = {

    items: this.service.grouped,
    totalPrice: this.service.totalPrice,
    totalPrepTime: this.service.totalPrepTime,
  }


}
