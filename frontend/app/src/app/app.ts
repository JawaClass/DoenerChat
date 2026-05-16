import { Component, computed, inject, model, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuBoard, MenuBoardDisplayItem } from "./menu-board/menu-board";
import { CustomerOrderSummary } from "./customer-order-summary/customer-order-summary";
import { TopBar } from "./top-bar/top-bar";
import { MenuItemGroup, MenuItemsService } from './menu-items-service';
import { OrderSelectionService } from './order-selection-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBoard, CustomerOrderSummary, TopBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private readonly service = inject(MenuItemsService)
  private readonly basketService = inject(OrderSelectionService)
  private readonly router = inject(Router)
  protected readonly items = computed(() => {

    const result = this.service.itemsDisplayed()

    if (result.mode === "ID") {
      return {
        mode: result.mode,
        items: result.items.map(item => ({
          item: item,
          title: item.name,
          subtitle: item.category,
          mode: result.mode
        }))
      }
    }

    else if (result.mode === "CATEGORY" || result.mode === "VERTICAL_CATEGORY") {
      return {
        mode: result.mode,
        items: result.items.map(item => ({
          item: item,
          title: item.name,
          mode: result.mode,
          // subtitle: 
        }))
      }
    }


    throw new Error("NOT IMPLEMENTED")
  })


  itemSelected(item: MenuBoardDisplayItem) {

    console.log("itemSelected", item)

    if (item.mode === "ID") {
      this.basketService.add(item.item)
    }
    else if (item.mode === "CATEGORY") {
      const group = item.item as MenuItemGroup
      this.router.navigate(['/menu', group.name]);
    }

  }
}
