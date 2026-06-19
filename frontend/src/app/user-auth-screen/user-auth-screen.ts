import { Component, inject, input, signal } from '@angular/core';
import { Login } from "./login/login";
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
import { ResetPassword } from './reset-password/reset-password';
import { Register } from './register/register';
import { UserAuthService } from './user-auth-service';


@Component({
  selector: 'app-user-auth-screen',
  imports: [Login, ResetPassword, Register],
  templateUrl: './user-auth-screen.html',
  styleUrl: './user-auth-screen.css',
})
export class UserAuthScreen {

  private readonly _dialogRef = inject<BrnDialogRef<void>>(BrnDialogRef);

  private readonly userAuthService = inject(UserAuthService)

  readonly authScreen = this.userAuthService.authScreen

  constructor() {
    this.userAuthService.setDialogRef(this._dialogRef)
  }

}
