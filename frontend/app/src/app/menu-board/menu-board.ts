import { Component, inject, input, output } from '@angular/core';
import { MenuBoardItem } from './menu-board-item/menu-board-item';
import { DisplayModeType } from '../menuboard-display-mode/menuboard-display-mode';


export interface MenuBoardDisplayItem<TData = any> {
  title: string
  subtitle?: string
  mode: DisplayModeType
  item: TData
}
@Component({
  selector: 'app-menu-board',
  imports: [MenuBoardItem],
  templateUrl: './menu-board.html',
  styleUrl: './menu-board.css',
})
export class MenuBoard {

  readonly menuItems = input.required<MenuBoardDisplayItem[]>()

  readonly itemSelected = output<MenuBoardDisplayItem>()


}
