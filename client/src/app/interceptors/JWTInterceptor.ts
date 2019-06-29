import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private notifySrv: any) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    console.log('interceptor');
    const jwtReq = req.clone({
      headers: req.headers.set('token', 'asdf')
    });
    return next.handle(jwtReq).pipe(
      mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.body.code !== 0) {
          return Observable.create(observer => observer.error(event));
        }
        return Observable.create(observer => observer.next(event));
      }),
      catchError(res => {
        switch (res.status) {
          case 401:
            // 权限处理
            location.href = ''; // 重新登录
            break;
          case 200:
            // 业务层级错误处理
            this.notifySrv.error('业务错误', `错误代码为：${res.body.code}`);
            break;
          case 404:
            this.notifySrv.error('404', `API不存在`);
            break;
        }
        // 以错误的形式结束本次请求
        return throwError(res);
      })
    ) as Observable<
      | HttpSentEvent
      | HttpHeaderResponse
      | HttpProgressEvent
      | HttpResponse<any>
      | HttpUserEvent<any>
    >;
  }
}
