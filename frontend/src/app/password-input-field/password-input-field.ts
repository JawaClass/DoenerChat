import { Component, input, signal } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEyeOff, lucideEye } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports, HlmFieldError } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports, HlmInputGroup } from '@spartan-ng/helm/input-group';

@Component({
  selector: 'app-password-input-field',
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
  templateUrl: './password-input-field.html',
  styleUrl: './password-input-field.css',
})
export class PasswordInputField {
  readonly passwordField = input.required<FieldTree<string, string>>();
  readonly label = input.required<string>();

  readonly showPassword = signal(false);

  toggleShowPassword() {
    this.showPassword.update((s) => !s);
  }
}
