import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MenuItem } from '../models';
import { form, FormField } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-board-item-edit',
  imports: [MatInputModule, MatFormFieldModule, ɵInternalFormsSharedModule, FormField, MatDialogActions, MatDialogContent, MatButtonModule, MatDialogTitle],
  templateUrl: './menu-board-item-edit.html',
  styleUrl: './menu-board-item-edit.css',
})
export class MenuBoardItemEdit {

  private _item: MenuItem = inject(MAT_DIALOG_DATA)

  readonly item = signal(this._item)
  readonly itemForm = form(this.item)


  save() {
    // this.itemForm().value().
  }


}
