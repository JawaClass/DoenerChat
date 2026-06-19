import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorInterceptor } from './http-interceptor-interceptor';
import { LoginService } from './user-auth-screen/login/login-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptorInterceptor])),
    provideAppInitializer(() => {
      return inject(LoginService).evalLoginStatus();
    }),
  ],
};
