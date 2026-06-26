import { Component, effect, input, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports, HlmFieldError } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports, HlmInputGroup } from '@spartan-ng/helm/input-group';
import { MealCreateDisplayItem } from './meal-create-display-item/meal-create-display-item';
import { HlmCard, HlmCardHeader } from '@spartan-ng/helm/card';
import { HlmDropdownMenu, HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { lucidePlus } from '@ng-icons/lucide';

export interface FoodMealsCreate {
  name: string;
}
export interface FoodMenuCreate {
  name: string;
  meals: FoodMealsCreate[];
}

const defaultMealsList: FoodMealsCreate[] = [
  { name: 'Doner' },
  { name: 'Pizza' },
  { name: 'Spaghetti' },
  { name: 'Eis Creme' },
  { name: 'Coca Cola' },
  { name: 'Sprite' },
  { name: 'Fanta' },
  { name: 'Wasser' },
  { name: 'Spezi' },
  { name: 'Milk Tea' },
  { name: 'Nudel Auflauf' },
  { name: 'Bratwurst' },
  { name: 'Chips' },
];

@Component({
  selector: 'app-menu-create-new',
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
    MealCreateDisplayItem,
    HlmDropdownMenuImports,
    HlmCard,
    HlmCardHeader,
    HlmDropdownMenu,
    HlmSeparator,
  ],
  templateUrl: './menu-create-new.html',

  providers: [provideIcons({ lucidePlus })],
  styleUrl: './menu-create-new.css',
})
export class MenuCreateNew {
  readonly menu = input<FoodMenuCreate>({
    name: '',
    meals: defaultMealsList,
  });

  readonly effUpdateFormModel = effect(() => {
    this.menuModel.set(this.menu());
  });

  private readonly menuModel = signal<FoodMenuCreate>({
    name: '',
    meals: [],
  });

  readonly menuForm = form(this.menuModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Bitte Feld ausfüllen' });
  });
}
