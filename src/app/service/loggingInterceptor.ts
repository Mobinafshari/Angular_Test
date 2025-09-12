import { HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs';

export function loggingInterceptor<T>(request: HttpRequest<T>, next: HttpHandlerFn) {
  const req = request.clone({
    headers: request.headers.set('X-DEBUG', 'Testing'),
  });
  console.log('Request', request);
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response', event.status);
          console.log('Response', event.body);
        }
      },
    })
  );
}
