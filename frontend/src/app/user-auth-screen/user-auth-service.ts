import { computed, Injectable, signal } from '@angular/core';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';

export type AuthScreen = 'Login' | 'ResetPassword' | 'Register' | 'ConfirmRegistrationEmail';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private _dialogRef: BrnDialogRef<void> | null = null;

  setDialogRef(dialogRef: BrnDialogRef<void>) {
    this._dialogRef = dialogRef;
  }

  closeDialog() {
    this._dialogRef?.close();
  }

  private readonly _authScreen = signal<AuthScreen>('Login');

  readonly authScreen = computed(() => this._authScreen());

  setScreen(screen: AuthScreen) {
    this._authScreen.set(screen);
  }
}
