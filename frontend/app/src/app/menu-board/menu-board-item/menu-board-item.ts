import { Component, computed, inject, input, output } from '@angular/core';
import { MenuItem } from '../../models';
import { CommonModule } from '@angular/common';
import { EditModeService } from '../../edit-mode-service';
import { MatButtonModule } from '@angular/material/button';
import { LucideFileText } from '@lucide/angular';
import { MenuBoardDisplayItem } from '../menu-board';
import { MatDialog } from '@angular/material/dialog';
import { MenuBoardItemEdit } from '../../menu-board-item-edit/menu-board-item-edit';

const PREDEFINED_COLORS = [
  "bg-blue-500 hover:bg-blue-600 transition-colors",
  "bg-emerald-500 hover:bg-emerald-600 transition-colors",
  "bg-amber-500 hover:bg-amber-600 transition-colors",
  "bg-rose-500 hover:bg-rose-600 transition-colors",
];

@Component({
  selector: 'app-menu-board-item',
  templateUrl: './menu-board-item.html',
  imports: [CommonModule, MatButtonModule, LucideFileText],
  styleUrl: './menu-board-item.css',
})
export class MenuBoardItem {
  editClicked(event: PointerEvent) {
    event.stopPropagation()
    this.dialog.open(MenuBoardItemEdit, {
      data: this.item().item
    })
  }
  readonly item = input.required<MenuBoardDisplayItem>()
  readonly itemSelected = output<void>()

  private readonly dialog = inject(MatDialog)

  private readonly editModeService = inject(EditModeService)

  readonly editingAllowed = this.editModeService.isEditingAllowed

  readonly bgColor = computed(() => {
    const random = Math.random() * 4
    let idx = Math.round(random)
    idx = Math.min(idx, PREDEFINED_COLORS.length - 1)
    return PREDEFINED_COLORS[idx]
  })


}
