import { Component, computed, input, signal } from '@angular/core';
import { HlmFieldGroup } from '../../../libs/ui/field/src/lib/hlm-field-group';
import { HlmField, HlmFieldDescription } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { form, required, FormField, SchemaFn, FieldTree } from '@angular/forms/signals';

export interface AddressData {
  city: string;
  zipCode: string;
  street: string;
  streetNo: string;
}
export const addressSchema: SchemaFn<AddressData> = (p) => {
  required(p.city, { message: 'Bitte Feld ausfüllen' });
  required(p.zipCode, { message: 'Bitte Feld ausfüllen' });
  required(p.street, { message: 'Bitte Feld ausfüllen' });
  required(p.streetNo, { message: 'Bitte Feld ausfüllen' });
};

@Component({
  selector: 'app-address-form',
  imports: [HlmFieldGroup, HlmField, HlmInputImports, FormField],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css',
})
export class AddressForm {
  readonly address = input.required<FieldTree<AddressData, string>>();

  readonly valid = computed(() => this.address()().valid());
}
