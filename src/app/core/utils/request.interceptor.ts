import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export function apiTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const newReq = req.clone({
    headers: req.headers.append(
      'Authorization',
      `Bearer ${environment.apiToken}`,
    ),
  });

  return next(newReq);
}

export function baseUrlInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  if (req.url.includes('assets')) {
    return next(req);
  }

  const newReq = req.clone({
    url: `${environment.apiUrl}/${req.url}`,
  });

  return next(newReq);
}
