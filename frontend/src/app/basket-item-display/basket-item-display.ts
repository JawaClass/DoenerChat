import { Component, inject, input } from '@angular/core';
import { LucideFileText, LucideDelete, LucideTrash } from '@lucide/angular';
import { BasketMenuItem, OrderSelectionService } from '../shares/services/order-selection-service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EditModeService } from '../shares/services/edit-mode-service';
@Component({
  selector: 'app-basket-item-display',
  imports: [LucideFileText, MatCheckboxModule, CommonModule, MatButtonModule, LucideDelete, LucideTrash],
  templateUrl: './basket-item-display.html',
  styleUrl: './basket-item-display.css',
})
export class BasketItemDisplay {
  readonly item = input.required<BasketMenuItem>()

  private readonly service = inject(OrderSelectionService)
  private readonly editModeService = inject(EditModeService)

  readonly editingAllowed = this.editModeService.isEditingAllowed

  delete() {
    this.service.removeItem(this.item())
  }


  toggleIsActive() {
    const item = this.item()
    this.service.editItem({
      ...item,
      active: !item.active
    })
  }
}
