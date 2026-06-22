import { Routes } from '@angular/router';
import { MenuBoard } from './menu-board/menu-board';
import { MenuBoardPage } from './menu-board-page/menu-board-page';
import { PasswordResetForwarding } from './password-reset-forwarding/password-reset-forwarding';
import { Restaurants } from './restaurants/restaurants';
import { authGuard } from './config/auth-guard';
import { Homepage } from './homepage/homepage';
import { CreateNewRestaurant } from './restaurants/create-new-restaurant/create-new-restaurant';
import { Employees } from './employees/employees';

export const routes: Routes = [
  { path: 'menu/:name', component: MenuBoardPage }, // Dynamic
  { path: 'account/password-reset', component: PasswordResetForwarding },
  {
    path: 'restaurants',
    component: Restaurants,
    canActivate: [authGuard],

    children: [
      {
        path: 'new-restaurant',
        component: CreateNewRestaurant,
      },
    ],
  },
  { path: 'homepage', component: Homepage },

  { path: 'employees', component: Employees },

  { path: '', component: Homepage },

  { path: '**', component: Homepage },
];
