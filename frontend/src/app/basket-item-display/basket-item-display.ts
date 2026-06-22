import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LucideFileText, LucideTrash } from '@lucide/angular';
import { EditModeService } from '../shared/services/edit-mode-service';
import { BasketMenuItem, OrderSelectionService } from '../shared/services/order-selection-service';
@Component({
  selector: 'app-basket-item-display',
  imports: [LucideFileText, MatCheckboxModule, CommonModule, MatButtonModule, LucideTrash],
  templateUrl: './basket-item-display.html',
  styleUrl: './basket-item-display.css',
})
export class BasketItemDisplay {
  readonly item = input.required<BasketMenuItem>();

  private readonly service = inject(OrderSelectionService);
  private readonly editModeService = inject(EditModeService);

  readonly editingAllowed = this.editModeService.isEditingAllowed;

  delete() {
    this.service.removeItem(this.item());
  }

  toggleIsActive() {
    const item = this.item();
    this.service.editItem({
      ...item,
      active: !item.active,
    });
  }
}
