import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from '../../base-service';
import { catchError, tap, throwError } from 'rxjs';

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

  evalLoginStatus() {
    return this.httpClient.get<LoginStatus>('/api/auth/status').pipe(
      tap((status) => {
        if (status.loggedIn) {
          this._loggedInUser.set(status.user);
        } else {
          this._loggedInUser.set(null);
        }
      }),
    );
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
