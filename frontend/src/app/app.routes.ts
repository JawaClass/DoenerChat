import { Routes } from '@angular/router';
import { MenuBoard } from './menu-board/menu-board';
import { MenuBoardPage } from './menu-board-page/menu-board-page';
import { PasswordResetForwarding } from './password-reset-forwarding/password-reset-forwarding';
import { Restaurants } from './restaurants/restaurants';
import { authGuard } from './config/auth-guard';
import { Homepage } from './homepage/homepage';
import { CreateNewRestaurant } from './restaurants/create-new-restaurant/create-new-restaurant';
import { Employees } from './employees/employees';
import { RestaurantDetail } from './restaurants/restaurant-detail/restaurant-detail';
import { MenuCreateNewForRestaurant } from './menu-create-new-for-restaurant/menu-create-new-for-restaurant';

export const routes: Routes = [
  { path: 'menu/:name', component: MenuBoardPage },
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
      {
        path: ':uuid',
        component: RestaurantDetail,
      },
      {
        path: ':uuid/menus/create-new',
        component: MenuCreateNewForRestaurant,
      },
    ],
  },
  { path: 'homepage', component: Homepage },

  { path: 'employees', component: Employees },

  { path: '', component: Homepage },

  { path: '**', component: Homepage },
];
