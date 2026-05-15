import { Component, computed, input, output } from '@angular/core';
import { MenuItem } from '../../models';
import { CommonModule } from '@angular/common';

const PREDEFINED_COLORS = [
  "bg-blue-500 hover:bg-blue-600 transition-colors",
  "bg-emerald-500 hover:bg-emerald-600 transition-colors",
  "bg-amber-500 hover:bg-amber-600 transition-colors",
  "bg-rose-500 hover:bg-rose-600 transition-colors",
];

@Component({
  selector: 'app-menu-board-item',
  templateUrl: './menu-board-item.html',
  imports: [CommonModule],
  styleUrl: './menu-board-item.css',
})
export class MenuBoardItem {
  readonly item = input.required<MenuItem>()
  readonly itemSelected = output<void>()

  readonly bgColor = computed(() => {

    const random = Math.random() * 4

    let idx = Math.round(random)

    idx = Math.min(idx, PREDEFINED_COLORS.length - 1)

    return PREDEFINED_COLORS[idx]

  })


}
