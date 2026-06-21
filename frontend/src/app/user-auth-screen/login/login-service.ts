import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from '../../base-service';
import { catchError, interval, of, shareReplay, tap, throwError, timeout } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

interface LoginStatus {
  loggedIn: boolean;
  user: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  private readonly loginUrl = '/api/auth/login';
  private readonly logoutUrl = '/api/auth/logout';

  private readonly _loggedInUser = signal<string | null>(null);

  readonly loggedInUser = computed(() => this._loggedInUser());

  readonly isLoggedIn = computed(() => this._loggedInUser() != null);

  private readonly lodginStatus$ = this.httpClient.get<LoginStatus>('/api/auth/status').pipe(
    timeout(1000),
    tap((status) => {
      if (status.loggedIn) {
        this._loggedInUser.set(status.user);
      } else {
        this._loggedInUser.set(null);
      }
    }),
    catchError((err) => {
      console.warn('Cant eval user authentication... Backend down?');
      this._loggedInUser.set(null);
      return of(null);
    }),
    shareReplay(1),
  );

  evalLoginStatus() {
    return this.lodginStatus$;
  }

  login(email: string, password: string) {
    return this.httpClient
      .post(this.loginUrl, {
        email: email,
        password: password,
      })
      .pipe(tap(() => this._loggedInUser.set(email)));
  }

  logout() {
    return this.httpClient.post(this.logoutUrl, {}).pipe(tap(() => this._loggedInUser.set(null)));
  }
}
