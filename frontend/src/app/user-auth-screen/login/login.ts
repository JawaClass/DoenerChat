import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports, HlmDialogTitle } from '@spartan-ng/helm/dialog';
import { HlmFieldError, HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEyeOff, lucideEye } from '@ng-icons/lucide';
import { HlmInputGroup, HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { LoginService } from './login-service';
import { form, FormField, required, email } from '@angular/forms/signals';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { UserAuthService } from '../user-auth-service';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HlmDialogImports,
    HlmFieldImports,
    HlmInputImports,
    HlmButtonImports,
    NgIcon,
    HlmInputGroupImports,
    HlmInputGroup,
    FormField,
    HlmFieldError,
    HlmAlertImports,
  ],
  providers: [provideIcons({ lucideEyeOff, lucideEye })],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly loginService = inject(LoginService);

  private readonly authService = inject(UserAuthService);

  readonly loginFailed = signal(false);

  private readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  readonly loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Bitte Feld ausfüllen' });
    email(schemaPath.email, { message: 'Bitte eine gültige E-Mail-Adresse eintragen' });
    required(schemaPath.password, { message: 'Bitte Feld asufüllen' });
  });

  protected readonly showPassword = signal(false);

  openRegisterScreen() {
    // this.loginForm.password
    this.authService.setScreen('Register');
  }

  openPasswordResetScreen() {
    this.authService.setScreen('ResetPassword');
  }

  toggleShowPassword() {
    console.log('toggleShowpassword', this.showPassword());
    this.showPassword.update((s) => !s);
  }

  login() {
    this.loginFailed.set(false);
    const form = this.loginForm().value();
    console.log('login...', form);
    this.loginService.login(form.email, form.password).subscribe({
      error: () => {
        this.loginFailed.set(true);
      },
      complete: () => {
        this.loginFailed.set(false);
        this.authService.closeDialog();
      },
    });
  }
}
