import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBoard } from "./menu-board/menu-board";
import { MenuItem } from './models';
import { menuItems } from './dummy-data';
import { CustomerOrderSummary } from "./customer-order-summary/customer-order-summary";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBoard, CustomerOrderSummary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly items = signal<MenuItem[]>([
    // { name: "Doener", category: "fastfood", price: 6, currency: "EUR" },
    // { name: "Coca Cola", category: "drinks", price: 1.9, currency: "EUR" },
    // { name: "Fanta", category: "drinks", price: 1.9, currency: "EUR" },
    // { name: "Sprite", category: "drinks", price: 1.9, currency: "EUR" },
    ...menuItems
  ]);
}
