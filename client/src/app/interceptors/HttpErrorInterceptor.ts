import { Injectable, Injector, SkipSelf } from '@angular/core';
import {
    HttpInterceptor,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpUserEvent,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { inject } from '@angular/core/testing';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private notiSvr: NzNotificationService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // console.log('interceptor');
        // this.notiSvr=new NzNotificationService();
        const jwtReq = req.clone({
            headers: req.headers.set('token', 'asdf'),
        });
        return next.handle(jwtReq).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                //  window.alert(errorMessage);
                console.log(errorMessage);
                this.notiSvr.error('error', errorMessage);
                return throwError(error);
            })
        ) as Observable<HttpEvent<any>>;
    }
}
