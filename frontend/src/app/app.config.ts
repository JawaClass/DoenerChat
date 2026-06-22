import {
  ApplicationConfig,
  ErrorHandler,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { httApiAddBaseUrlInterceptor } from './config/http-add-base-url-interceptor';
import { GlobalErrorHandler } from './config/global-error-handler';
import { httpErrorResponseMappingInterceptor } from './config/http-error-response-mapping-interceptor';
import { httpLoadingStateInterceptor } from './config/http-loading-state-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        httApiAddBaseUrlInterceptor,
        httpErrorResponseMappingInterceptor,
        httpLoadingStateInterceptor,
      ]),
    ),
    provideAppInitializer(() => {}),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
