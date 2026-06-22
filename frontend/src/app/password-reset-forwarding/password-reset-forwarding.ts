import { Component, inject, signal } from '@angular/core';
import { form, required, validate } from '@angular/forms/signals';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideClock } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { PasswordInputField } from '../password-input-field/password-input-field';
import { PasswordResetService } from './password-reset-service';
import { Router } from '@angular/router';

interface ResetpasswordData {
  password: string;
  passwordConfirm: string;
}
@Component({
  selector: 'app-password-reset-forwarding',
  imports: [
    HlmDialogImports,
    HlmFieldImports,
    HlmInputImports,
    HlmButtonImports,
    HlmInputGroupImports,
    HlmAlertImports,
    PasswordInputField,
  ],
  providers: [provideIcons({ lucideArrowLeft, lucideClock })],
  templateUrl: './password-reset-forwarding.html',
  styleUrl: './password-reset-forwarding.css',
})
export class PasswordResetForwarding {
  private readonly passwordResetService = inject(PasswordResetService);

  readonly isResetTokenValid = signal(true);
  private readonly router = inject(Router);

  constructor() {
    /**
     * instantly make request to verify the token
     */
    this.verifyToken().subscribe({
      error: (err) => {
        this.isResetTokenValid.set(false);
      },
    });
  }

  private readonly resetPasswordModel = signal<ResetpasswordData>({
    password: '',
    passwordConfirm: '',
  });

  readonly resetPasswordForm = form(this.resetPasswordModel, (schemaPath) => {
    required(schemaPath.password, { message: 'Bitte Feld asufüllen' });
    required(schemaPath.passwordConfirm, { message: 'Bitte Feld asufüllen' });
    validate(schemaPath.passwordConfirm, ({ value, valueOf }) => {
      // validate that this passwords is equals to first one
      const confirmPwd = value();
      const primaryPwd = valueOf(schemaPath.password);
      if (confirmPwd !== primaryPwd) {
        return {
          kind: 'passwordMismatch',
          message: 'Die Passwörter stimmen nicht überein.',
        };
      }

      return undefined;
    });
  });

  verifyToken() {
    return this.passwordResetService.verifyResetToken();
  }

  changePassword() {
    const newPassword = this.resetPasswordModel().password;
    this.passwordResetService.changePassword(newPassword).subscribe({
      next: (result) => {
        this.router.navigate(['/homepage']);
      },
      error: (err) => {},
    });
  }
}
