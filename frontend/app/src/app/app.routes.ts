import { Routes } from '@angular/router';
import { MenuBoard } from './menu-board/menu-board';
import { MenuBoardPage } from './menu-board-page/menu-board-page';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: HomePage,`
    //   },
    { path: 'menu/:name', component: MenuBoardPage }, // Dynamic
];
