import { Component, inject } from '@angular/core';
import { DisplayModeType, MenuboardDisplayMode } from "../menuboard-display-mode/menuboard-display-mode";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditModeService } from '../edit-mode-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItemsService } from '../menu-items-service';
import { LucideArrowDownWideNarrow } from "@lucide/angular";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SortByMenuSettings } from '../sort-by-menu-settings/sort-by-menu-settings';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-top-bar',
  imports: [MenuboardDisplayMode, MatCheckboxModule, LucideArrowDownWideNarrow, MatButtonModule, MatMenuModule, SortByMenuSettings],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {

  private readonly editModeService = inject(EditModeService)
  private readonly menuItemService = inject(MenuItemsService)

  private readonly dialog = inject(MatDialog)

  readonly isEditingAllowed = this.editModeService.isEditingAllowed

  editingModeChanged(value: boolean) {
    this.editModeService.setEditionModeAllowd(value)
  }
  private readonly router = inject(Router)
  private readonly route = inject(ActivatedRoute)

  readonly selectedMode = toSignal(
    this.route.queryParamMap.pipe(
      map(p => (p.get('mode') ?? 'ID') as DisplayModeType)
    ), { initialValue: "ID" }

  )
  modeChanged(mode: DisplayModeType) {
    // this.router.navigate([], { queryParams: { mode }, queryParamsHandling: 'merge' })
    this.menuItemService.changeDisplayMode(mode)
  }

}
