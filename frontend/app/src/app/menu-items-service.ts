import { computed, Injectable, signal } from '@angular/core';
import { MenuItem } from './models';
import { menuItems } from './dummy-data';
import { DisplayMode, DisplayModeType } from './menuboard-display-mode/menuboard-display-mode';
import { SortByMenuSettings } from './sort-by-menu-settings/sort-by-menu-settings';

export interface MenuItemSortByParam {
  field: keyof MenuItem
  asc: boolean
}

const compareValues = (a: MenuItem[keyof MenuItem], b: MenuItem[keyof MenuItem]) => {
  if (typeof a === 'number' && typeof b === 'number') return a - b
  return a.toString().localeCompare(b.toString())
}

const compareMenuItems = (item1: MenuItem, item2: MenuItem, sortBy: MenuItemSortByParam[]) => {
  for (const param of sortBy) {
    const rank = compareValues(item1[param.field], item2[param.field])
    if (rank !== 0) return param.asc ? rank : -rank
  }
  return 0
}

const groupItemsByCategory = (items: MenuItem[]): MenuItemGroup[] => {

  const groupedItems = new Map<string, MenuItemGroup>()

  for (const item of items) {
    const key = item.category
    const acc = groupedItems.get(key)?.items ?? []

    groupedItems.set(key, { name: item.category, items: [...acc, item] })
  }
  return [...groupedItems.values()]

}
export interface MenuItemGroup {
  name: string
  items: MenuItem[]
}
@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {

  private readonly _items = signal<MenuItem[]>(menuItems)

  readonly items = this._items.asReadonly()

  readonly itemsDisplayed = computed(() => {
    const items = this.items()
    const sorting = this.sorting()
    console.log("recompute itemsDispolyed", sorting)
    const itemsSorted = sorting.length ? items.sort((a, b) => compareMenuItems(a, b, sorting)) : items
    const mode = this.displayMode()
    if (mode === "ID") return { mode, items: itemsSorted }
    if (mode === "CATEGORY" || mode == "VERTICAL_CATEGORY") return { mode, items: groupItemsByCategory(itemsSorted) }
    throw new Error("NOT IMPLEMENTED")
  })


  private readonly _sorting = signal<MenuItemSortByParam[]>([])
  readonly sorting = this._sorting.asReadonly()

  private readonly _displayMode = signal<DisplayModeType>("ID")
  readonly displayMode = this._displayMode.asReadonly()

  changeDisplayMode(mode: DisplayModeType) {
    this._displayMode.set(mode)
  }

  setSorting(sorting: MenuItemSortByParam[]) {
    this._sorting.set(sorting)
  }
}
