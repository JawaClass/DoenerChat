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
import { email, form, FormField, required } from '@angular/forms/signals';
import { UserAuthService } from '../user-auth-service';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { RegisterService } from './register-service';
import { lucideEyeOff, lucideEye } from '@ng-icons/lucide';
import { HttpErrorResponse } from '@angular/common/http';
import {
  BackendResponseError,
  BackendResponseErrorSchema,
} from '../../shared/backend-response-error';

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
    required(schemaPath.email, { message: 'Bitte Feld ausfüllen' });
    email(schemaPath.email, { message: 'Bitte eine gültige E-Mail-Adresse eintragen' });
    required(schemaPath.password, { message: 'Bitte Feld asufüllen' });
  });

  protected readonly showPassword = signal(false);

  readonly registrationError = signal<null | BackendResponseError>(null);

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

        this.registrationError.set(null);
        this.authService.setScreen('ConfirmRegistrationEmail');
      },
      error: (httpError: HttpErrorResponse) => {
        console.log('ZOD parse', httpError.error);
        const error = BackendResponseErrorSchema.parse(httpError.error);
        console.log('Registration failed ZOD', error);
        this.registrationError.set(error);
      },
    });
  }

  openLoginScreen() {
    this.authService.setScreen('Login');
  }
}
