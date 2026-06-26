import {
  ApplicationConfig,
  ErrorHandler,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { httApiAddBaseUrlInterceptor } from './config/http-add-base-url-interceptor';
import { GlobalErrorHandler } from './config/global-error-handler';
import { httpErrorResponseMappingInterceptor } from './config/http-error-response-mapping-interceptor';
import { httpLoadingStateInterceptor } from './config/http-loading-state-interceptor';
import { LoginService } from './user-auth-screen/login/login-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(
      withInterceptors([
        httApiAddBaseUrlInterceptor,
        httpErrorResponseMappingInterceptor,
        httpLoadingStateInterceptor,
      ]),
    ),
    provideAppInitializer(() => {
      // login is user has session
      inject(LoginService).evalLoginStatus().subscribe();
    }),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
