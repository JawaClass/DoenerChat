import { Component, input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMoreVertical } from '@ng-icons/lucide';

interface Meal {
  name: string;
}

@Component({
  selector: 'app-meal-create-display-item',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports, NgIcon],
  providers: [provideIcons({ lucideArrowRight, lucideMoreVertical })],
  templateUrl: './meal-create-display-item.html',
  styleUrl: './meal-create-display-item.css',
})
export class MealCreateDisplayItem {
  readonly meal = input.required<Meal>();
}
