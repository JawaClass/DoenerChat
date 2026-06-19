import { Component, inject } from '@angular/core';
import {
  DisplayModeType,
  MenuboardDisplayMode,
} from '../menuboard-display-mode/menuboard-display-mode';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditModeService } from '../shares/services/edit-mode-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItemsService } from '../shares/services/menu-items-service';
import { LucideArrowDownWideNarrow } from '@lucide/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SortByMenuSettings } from '../sort-by-menu-settings/sort-by-menu-settings';
import { MatMenuModule } from '@angular/material/menu';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogService } from '@spartan-ng/helm/dialog';
import { UserAuthScreen } from '../user-auth-screen/user-auth-screen';
import { AuthScreen, UserAuthService } from '../user-auth-screen/user-auth-service';
import { MealService } from '../meal-service';
import { LoginService } from '../user-auth-screen/login/login-service';
@Component({
  selector: 'app-top-bar',
  imports: [
    MenuboardDisplayMode,
    MatCheckboxModule,
    LucideArrowDownWideNarrow,
    MatButtonModule,
    MatMenuModule,
    SortByMenuSettings,
    HlmButtonImports,
  ],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  logout() {
    this.loginService.logout().subscribe();
  }
  private readonly editModeService = inject(EditModeService);
  private readonly menuItemService = inject(MenuItemsService);

  private readonly mealsService = inject(MealService);

  private readonly dialog = inject(MatDialog);

  private readonly _hlmDialogService = inject(HlmDialogService);

  private readonly authService = inject(UserAuthService);
  private readonly loginService = inject(LoginService);

  readonly loggedInUser = this.loginService.loggedInUser;

  readonly isLoggedIn = this.loginService.isLoggedIn;

  fetchMeals() {
    this.mealsService.getMeals().subscribe((meals) => {
      console.log('meals', meals);
    });
  }

  openAuthDialog(screen: AuthScreen) {
    this.authService.setScreen(screen);
    this._hlmDialogService.open(UserAuthScreen, {
      // disable focus first html input element
      autoFocus: 'dialog',
    });
  }

  readonly isEditingAllowed = this.editModeService.isEditingAllowed;

  editingModeChanged(value: boolean) {
    this.editModeService.setEditionModeAllowd(value);
  }
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly selectedMode = toSignal(
    this.route.queryParamMap.pipe(map((p) => (p.get('mode') ?? 'ID') as DisplayModeType)),
    { initialValue: 'ID' },
  );
  modeChanged(mode: DisplayModeType) {
    // this.router.navigate([], { queryParams: { mode }, queryParamsHandling: 'merge' })
    this.menuItemService.changeDisplayMode(mode);
  }
}
