import { computed, Injectable, signal } from '@angular/core';
import { MenuItem } from './models';

export interface BasketMenuItem {
  item: MenuItem
  active: boolean
  basketId: number
}

export interface BasketMenuItemGroup {
  name: string
  items: BasketMenuItem[]
}

@Injectable({
  providedIn: 'root',
})
export class OrderSelectionService {

  private readonly selected = signal<BasketMenuItem[]>([])

  readonly basket = this.selected.asReadonly()

  private basketIdCounter = 0

  clear() {
    this.selected.set([])
  }

  add(...items: MenuItem[]) {
    const basketItems = items.map(item => this.menuItem2BasketItem(item))
    this.selected.update(current => [...current, ...basketItems])
  }

  editItem(item: BasketMenuItem) {
    this.selected.update(items => items.map(other => other.basketId === item.basketId ? item : other))
  }

  removeItem(item: BasketMenuItem) {
    this.selected.update(items => items.filter(other => other.basketId !== item.basketId))
  }

  private menuItem2BasketItem(item: MenuItem): BasketMenuItem {
    return {
      item: { ...item },
      active: true,
      basketId: ++this.basketIdCounter
    }
  }

  readonly activeItems = computed(() => {
    return this.selected().filter(item => item.active)
  })


  readonly totalPrice = computed(() => this.activeItems().reduce((acc, item) => acc + item.item.price, 0))

  readonly totalPrepTime = computed(() => this.activeItems().reduce((acc, item) => acc + item.item.preparationTime, 0))

  readonly grouped = computed(() => {

    const items = this.selected()

    const groupedItems = new Map<number, BasketMenuItemGroup>()

    for (const item of items) {
      const key = item.item.id
      const acc = groupedItems.get(key)?.items ?? []

      groupedItems.set(key, { name: item.item.name, items: [...acc, item] })
    }
    return [...groupedItems.values()]
  })





}
