import { Component, computed, inject, signal } from '@angular/core';
import { BasketMenuItem, BasketMenuItemGroup, OrderSelectionService } from '../order-selection-service';
import { BasketItemDisplay } from "../basket-item-display/basket-item-display";
import { BackItemGroupDisplay } from "../back-item-group-display/back-item-group-display";
import { MatAnchor } from "@angular/material/button";
import { VoiceService } from '../voice-service';
import { number2text } from '../voice-translation';




@Component({
  selector: 'app-customer-order-summary',
  imports: [BasketItemDisplay, BackItemGroupDisplay, MatAnchor],
  templateUrl: './customer-order-summary.html',
  styleUrl: './customer-order-summary.css',
})
export class CustomerOrderSummary {

  private readonly service = inject(OrderSelectionService)

  private readonly voiceService = inject(VoiceService)

  readonly btnDisabled = computed(() => this.basket.itemsActive().length === 0)

  readonly basket = {
    // itemsActive: () => this.basket.items().filter(item => item.items.filter(x => x.active).length),
    itemsActive: this.service.itemsActive,
    items: this.service.grouped,
    totalPrice: this.service.totalPrice,
    totalPrepTime: this.service.totalPrepTime,
  }

  textifyBasket(items: BasketMenuItemGroup[]) {

    const lines: string[] = []

    for (const item of items) {
      const amount = item.items.filter(x => x.active).length
      const amountAsText = number2text(amount, "DE")
      lines.push(`${amountAsText} ${item.name}`)
    }

    return lines.join(", ")

  }

  makeOrder() {

    const items = this.basket.itemsActive()
    const itemsGrouped = this.service.groupItemsIntoGroups(items)

    const text = this.textifyBasket(itemsGrouped)

    console.log(text)

    this.voiceService.speak2(`Neu Bestellung!!! ${items.length} Items. ${text}. ENDE`)
  }

}
