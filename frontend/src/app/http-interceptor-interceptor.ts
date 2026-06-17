import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from './../environments/environment.development'
export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("http interceptor....", req.url)
  // Don't modify absolute URLs
  if (req.url.startsWith('http')) {
    return next(req);
  }

  let baseUrl = environment.backend
  let url = req.url

  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.substring(0, baseUrl.length - 2)
  }

  if (url.startsWith("/")) {
    console.log("rem leading slash")
    url = url.substring(1)
  }

  const updatedUrl = `${baseUrl}/${url}`
  console.log("updated url", updatedUrl, "...", baseUrl, "...", req.url)

  const updatedRequest = req.clone({ url: updatedUrl })

  return next(updatedRequest);
};
