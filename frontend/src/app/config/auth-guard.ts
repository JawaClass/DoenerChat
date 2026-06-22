import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../user-auth-screen/login/login-service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const authenitcated = loginService.isLoggedIn();

  console.log('auth guard. authenitcated', authenitcated, route.url, route.title, route.component);

  // if (!authenitcated) {
  //   router.navigate(['/homepage']);
  // }

  // return authenitcated;
  return loginService
    .evalLoginStatus()
    .pipe(map(() => (loginService.loggedInUser() ? true : router.createUrlTree(['/homepage']))));
};
