import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldError, HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEyeOff, lucideEye } from '@ng-icons/lucide';
import { HlmInputGroup, HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { LoginService } from './login-service';
import { form, FormField, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

const loginModel = signal<LoginData>({
  email: '',
  password: '',
});
@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HlmDialogImports, HlmFieldImports, HlmInputImports, HlmButtonImports, NgIcon, HlmIcon, HlmInputGroupImports, HlmInputGroup, FormField, HlmFieldError],
  providers: [provideIcons({ lucideEyeOff, lucideEye })],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private readonly loginService = inject(LoginService)
  readonly loginForm = form(loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Bitte Feld ausfuellen' });
    required(schemaPath.password, { message: 'Bitte Feld asufuellen' });
  });

  protected readonly showPassword = signal(false)
  toggleShowPassword() {
    console.log("toggleShowpassword", this.showPassword())
    this.showPassword.update(s => !s)
  }

  login() {
    const form = this.loginForm().value()
    console.log("login...", form)
    this.loginService.login(form.email, form.password).subscribe(result => {
      console.log("login result:", result)
    })
  }
}
