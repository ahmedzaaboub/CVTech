import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginIntercepter implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

console.log(req);
return next.handle(req);


  }


}

export class LoginIntercepterProvider {

  //  provide: HTTP_INTERCEPTORS;
  useclass: LoginIntercepter;
  multi: true;
}
