import { computed, Injectable, signal } from '@angular/core';


export type AuthScreen = "Login" | "ResetPassword" | "Register"

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

  private readonly _authScreen = signal<AuthScreen>("Login")

  readonly authScreen = computed(() => this._authScreen())

  setScreen(screen: AuthScreen) {
    this._authScreen.set(screen)
  }


}
