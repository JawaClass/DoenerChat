import { Routes } from '@angular/router';
import { MenuBoard } from './menu-board/menu-board';
import { MenuBoardPage } from './menu-board-page/menu-board-page';
import { PasswordResetForwarding } from './password-reset-forwarding/password-reset-forwarding';
import { Restaurants } from './restaurants/restaurants';
import { authGuard } from './auth-guard';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
  { path: 'menu/:name', component: MenuBoardPage }, // Dynamic
  { path: 'account/password-reset', component: PasswordResetForwarding },
  { path: 'restaurants', component: Restaurants, canActivate: [authGuard] },
  { path: 'homepage', component: Homepage },

  { path: '', component: Homepage },

  { path: '**', component: Homepage },
];
