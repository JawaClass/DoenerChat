import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditModeService {

  private readonly _isEditingAllowed = signal(false)

  readonly isEditingAllowed = this._isEditingAllowed.asReadonly()

  setEditionModeAllowd(allowed: boolean) {
    this._isEditingAllowed.set(allowed)
  }
}
