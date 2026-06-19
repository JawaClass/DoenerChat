import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from '../../base-service';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {

  private readonly loginUrl = "/api/auth/login"

  private readonly _loggedInUser = signal<string | null>(null)

  readonly loggedInUser = computed(() => this._loggedInUser() != null)

  readonly isLoggedIn = computed(() => this._loggedInUser() != null)

  login(email: string, password: string) {
    return this.httpClient.post(this.loginUrl, {
      email: email,
      password: password
    }).pipe(
      tap(() => this._loggedInUser.set(email)),
    )
  }
}
