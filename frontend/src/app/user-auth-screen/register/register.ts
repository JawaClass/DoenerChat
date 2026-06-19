import { Component, computed, inject, signal } from '@angular/core';
import { HlmDialogHeader, HlmDialogFooter } from '@spartan-ng/helm/dialog';
import { HlmFieldGroup, HlmField, HlmFieldError, HlmFieldImports } from '@spartan-ng/helm/field';
import {
  HlmInputGroup,
  HlmInputGroupAddon,
  HlmInputGroupImports,
} from '@spartan-ng/helm/input-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmAlert } from '@spartan-ng/helm/alert';

import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { form, FormField, required } from '@angular/forms/signals';
import { UserAuthService } from '../user-auth-service';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { RegisterService } from './register-service';
import { lucideEyeOff, lucideEye } from '@ng-icons/lucide';
import { HttpErrorResponse } from '@angular/common/http';

interface RegisterData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  imports: [
    HlmDialogHeader,
    HlmFieldGroup,
    HlmField,
    HlmFieldError,
    HlmInputGroup,
    HlmInputGroupAddon,
    NgIcon,
    HlmAlert,
    HlmDialogFooter,
    FormField,
    HlmButtonImports,
    HlmFieldImports,
    HlmInputImports,
    HlmDialogImports,
    HlmInputGroupImports,
  ],
  providers: [provideIcons({ lucideEyeOff, lucideEye })],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly authService = inject(UserAuthService);

  private readonly registerService = inject(RegisterService);

  private readonly registerModel = signal<RegisterData>({
    email: '',
    password: '',
  });

  readonly registerForm = form(this.registerModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Bitte Feld ausfuellen' });
    required(schemaPath.password, { message: 'Bitte Feld asufuellen' });
  });

  protected readonly showPassword = signal(false);

  readonly registrationError = signal<null | any>(null);

  readonly registrationFailed = computed(() => this.registrationError() !== null);

  toggleShowPassword() {
    console.log('toggleShowpassword', this.showPassword());
    this.showPassword.update((s) => !s);
  }

  createAccount() {
    const form = this.registerForm().value();

    this.registerService.registerAccount(form.email, form.password).subscribe({
      next: (result) => {
        console.log('Register Account result', result);
      },
      error: (err: HttpErrorResponse) => {
        console.log('Registration failed', err.error);
        this.registrationError.set(err.error);
      },
    });
  }

  openLoginScreen() {
    this.authService.setScreen('Login');
  }
}
