import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

import { MatButtonModule } from '@angular/material/button';
import { LucideArrowDownAZ, LucideArrowUpAZ, LucideDynamicIcon } from '@lucide/angular';
import { MenuItem } from '../models';
import { MenuItemsService } from '../shared/services/menu-items-service';
interface SortByField {
  field: keyof MenuItem;
  text: string;
}
interface SortByFieldDisplay {
  active: boolean;
  asc: boolean;
  icon: typeof LucideArrowDownAZ | typeof LucideArrowUpAZ;
  field: keyof MenuItem;
  text: string;
}
@Component({
  selector: 'app-sort-by-menu-settings',
  imports: [MatCheckbox, ReactiveFormsModule, LucideDynamicIcon, MatButtonModule],
  templateUrl: './sort-by-menu-settings.html',
  styleUrl: './sort-by-menu-settings.css',
})
export class SortByMenuSettings {
  toggleDir(event: PointerEvent, field: SortByFieldDisplay) {
    event.stopPropagation();
    const asc = !field.asc;
    const icon = asc ? LucideArrowUpAZ : LucideArrowDownAZ;
    this.sortByFields.update((fields) =>
      fields.map((f) => (f === field ? { ...field, asc: asc, icon: icon } : f)),
    );
    this.setSorting();
  }
  checkChanged(event: MatCheckboxChange, field: SortByFieldDisplay) {
    this.sortByFields.update((fields) =>
      fields.map((f) => (f === field ? { ...field, active: event.checked } : f)),
    );
    this.setSorting();
  }
  private readonly FIELDS: SortByField[] = [
    { field: 'name', text: 'Name' },
    { field: 'category', text: 'Kategorie' },
    { field: 'price', text: 'Preis' },
    { field: 'calories', text: 'Kalorien' },
  ];

  readonly sortByFields = signal(
    [...this.FIELDS].map(
      (f) => ({ ...f, active: false, asc: true, icon: LucideArrowUpAZ }) as SortByFieldDisplay,
    ),
  );

  private readonly menuService = inject(MenuItemsService);

  private setSorting() {
    const sorting = this.sortByFields().filter((f) => f.active);
    this.menuService.setSorting(sorting);
  }
}
