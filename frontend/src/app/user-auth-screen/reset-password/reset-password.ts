import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideClock } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldError, HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { UserAuthService } from '../user-auth-service';
import { ResetPasswordService } from './reset-password-service';

interface ResetPasswordData {
  email: string;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  imports: [
    HlmDialogImports,
    HlmFieldImports,
    HlmInputImports,
    HlmButtonImports,
    NgIcon,
    HlmInputGroupImports,
    FormField,
    HlmFieldError,
    HlmAlertImports,
  ],
  providers: [provideIcons({ lucideArrowLeft, lucideClock })],
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  private readonly authService = inject(UserAuthService);
  private readonly resetPasswordService = inject(ResetPasswordService);

  private readonly resetpasswordModel = signal<ResetPasswordData>({
    email: '',
  });

  readonly passwordResetAllowed = this.resetPasswordService.resetAfterTimeoutAllowed;

  readonly resetPasswordForm = form(this.resetpasswordModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Bitte Feld ausfuellen' });
  });

  readonly noAccountFound = signal(false);

  resetPassword() {
    const email = this.resetPasswordForm.email().value();
    this.resetPasswordService.sendResetPasswordConfirmToken(email).subscribe((result) => {
      console.log('Reset password result:', result);
    });
  }

  openLoginScreen() {
    this.authService.setScreen('Login');
  }
}
