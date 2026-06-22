import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { catchError, throwError } from 'rxjs';
import { BackendResponseErrorSchema } from '../shared/backend-response-error';
export const httpErrorResponseMappingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('http interceptor....', req.url);
  // Don't modify absolute URLs
  if (req.url.startsWith('http')) {
    return next(req);
  }

  // catches http request error and validates it with zod into our domain error type
  return next(req).pipe(
    catchError((httpError: HttpErrorResponse) => {
      const customError = BackendResponseErrorSchema.parse(httpError.error);
      return throwError(() => customError);
    }),
  );
};
