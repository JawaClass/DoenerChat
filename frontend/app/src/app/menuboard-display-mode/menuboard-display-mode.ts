import { Component, inject, input, output } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemsService } from '../menu-items-service';

export type DisplayModeType = "ID" | "CATEGORY" | "VERTICAL_CATEGORY"
export interface DisplayMode {
  mode: DisplayModeType,
  text: string
}

@Component({
  selector: 'app-menuboard-display-mode',
  imports: [MatButtonToggleModule, MatIconModule],
  templateUrl: './menuboard-display-mode.html',
  styleUrl: './menuboard-display-mode.css',
})
export class MenuboardDisplayMode {

  readonly displayModes: DisplayMode[] = [
    { mode: "ID", text: "Item" },
    { mode: "CATEGORY", text: "Kategorie" },
    { mode: "VERTICAL_CATEGORY", text: "Vertikal" },
  ]
  readonly selectedMode = input.required<DisplayModeType>()
  readonly modeChanged = output<DisplayModeType>()



}
