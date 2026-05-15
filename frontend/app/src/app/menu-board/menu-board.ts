import { Component, inject, input } from '@angular/core';
import { MenuBoardItem } from './menu-board-item/menu-board-item';
import { MenuItem } from '../models';
import { OrderSelectionService } from '../order-selection-service';

@Component({
  selector: 'app-menu-board',
  imports: [MenuBoardItem],
  templateUrl: './menu-board.html',
  styleUrl: './menu-board.css',
})
export class MenuBoard {

  readonly menuItems = input.required<MenuItem[]>()

  private readonly service = inject(OrderSelectionService)

  itemSelected(item: MenuItem) {
    this.service.add(item)

  }

}
