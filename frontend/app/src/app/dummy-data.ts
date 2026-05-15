// ============================================================
//  IMBISS RESTAURANT MANAGEMENT – DUMMY DATEN
//  Generiert für: Speisekarte, Bestellungen, Mitarbeiter, Tische
// ============================================================

import { MenuItem } from "./models";

// ----------------------------
// MENÜ / SPEISEKARTE
// ----------------------------
export const menuItems: MenuItem[] = [
  // DÖNER & WRAPS
  { id: 1,  name: "Döner",                  category: "fastfood",   price: 6.00,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 2,  name: "Döner mit Käse",         category: "fastfood",   price: 6.50,  currency: "EUR", available: true,  preparationTime: 6 },
  { id: 3,  name: "Doppel Döner",           category: "fastfood",   price: 9.00,  currency: "EUR", available: true,  preparationTime: 7 },
  { id: 4,  name: "Vegetarischer Döner",    category: "fastfood",   price: 5.50,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 5,  name: "Hähnchen Döner",         category: "fastfood",   price: 6.00,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 6,  name: "Döner Box",             category: "fastfood",   price: 7.50,  currency: "EUR", available: true,  preparationTime: 8 },
  { id: 7,  name: "Wrap Classic",           category: "fastfood",   price: 5.50,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 8,  name: "Wrap Hähnchen",          category: "fastfood",   price: 5.50,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 9,  name: "Lahmacun",              category: "fastfood",   price: 4.50,  currency: "EUR", available: true,  preparationTime: 6 },
  { id: 10, name: "Lahmacun mit Salat",     category: "fastfood",   price: 5.00,  currency: "EUR", available: true,  preparationTime: 6 },

  // PIZZA
  { id: 11, name: "Pizza Margherita",       category: "pizza",      price: 7.00,  currency: "EUR", available: true,  preparationTime: 12 },
  { id: 12, name: "Pizza Salami",           category: "pizza",      price: 8.00,  currency: "EUR", available: true,  preparationTime: 12 },
  { id: 13, name: "Pizza Thunfisch",        category: "pizza",      price: 8.50,  currency: "EUR", available: true,  preparationTime: 12 },
  { id: 14, name: "Pizza Vegetarisch",      category: "pizza",      price: 8.00,  currency: "EUR", available: true,  preparationTime: 12 },
  { id: 15, name: "Pizza Calzone",          category: "pizza",      price: 9.00,  currency: "EUR", available: true,  preparationTime: 15 },
  { id: 16, name: "Pizza Hähnchen",         category: "pizza",      price: 9.00,  currency: "EUR", available: true,  preparationTime: 12 },
  { id: 17, name: "Pizza Spezial",          category: "pizza",      price: 10.00, currency: "EUR", available: true,  preparationTime: 14 },

  // BURGER
  { id: 18, name: "Classic Burger",         category: "burger",     price: 7.00,  currency: "EUR", available: true,  preparationTime: 10 },
  { id: 19, name: "Cheeseburger",           category: "burger",     price: 7.50,  currency: "EUR", available: true,  preparationTime: 10 },
  { id: 20, name: "Doppel Cheeseburger",    category: "burger",     price: 10.00, currency: "EUR", available: true,  preparationTime: 12 },
  { id: 21, name: "Hähnchen Burger",        category: "burger",     price: 7.50,  currency: "EUR", available: true,  preparationTime: 10 },
  { id: 22, name: "Veggie Burger",          category: "burger",     price: 7.00,  currency: "EUR", available: false, preparationTime: 10 },
  { id: 23, name: "BBQ Burger",             category: "burger",     price: 8.50,  currency: "EUR", available: true,  preparationTime: 11 },

  // BEILAGEN
  { id: 24, name: "Pommes klein",           category: "sides",      price: 2.50,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 25, name: "Pommes groß",            category: "sides",      price: 3.50,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 26, name: "Pommes mit Soße",        category: "sides",      price: 3.00,  currency: "EUR", available: true,  preparationTime: 5 },
  { id: 27, name: "Onion Rings",            category: "sides",      price: 3.00,  currency: "EUR", available: true,  preparationTime: 6 },
  { id: 28, name: "Coleslaw",               category: "sides",      price: 2.00,  currency: "EUR", available: true,  preparationTime: 1 },
  { id: 29, name: "Salat",                  category: "sides",      price: 2.50,  currency: "EUR", available: true,  preparationTime: 3 },
  { id: 30, name: "Knoblauchbrot",          category: "sides",      price: 2.00,  currency: "EUR", available: true,  preparationTime: 4 },

  // SAUCEN
  { id: 31, name: "Knoblauchsoße",          category: "sauces",     price: 0.50,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 32, name: "Scharf Soße",            category: "sauces",     price: 0.50,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 33, name: "Ketchup",                category: "sauces",     price: 0.30,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 34, name: "Mayonnaise",             category: "sauces",     price: 0.30,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 35, name: "BBQ Soße",               category: "sauces",     price: 0.50,  currency: "EUR", available: true,  preparationTime: 0 },

  // GETRÄNKE
  { id: 36, name: "Coca Cola",              category: "drinks",     price: 1.90,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 37, name: "Coca Cola Zero",         category: "drinks",     price: 1.90,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 38, name: "Fanta",                  category: "drinks",     price: 1.90,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 39, name: "Sprite",                 category: "drinks",     price: 1.90,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 40, name: "Ayran",                  category: "drinks",     price: 1.50,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 41, name: "Wasser still",           category: "drinks",     price: 1.20,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 42, name: "Wasser sprudelnd",       category: "drinks",     price: 1.20,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 43, name: "Apfelsaft",              category: "drinks",     price: 1.80,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 44, name: "Orangensaft",            category: "drinks",     price: 1.80,  currency: "EUR", available: true,  preparationTime: 0 },
  { id: 45, name: "Tee",                    category: "drinks",     price: 1.50,  currency: "EUR", available: true,  preparationTime: 2 },
  { id: 46, name: "Kaffee",                 category: "drinks",     price: 2.00,  currency: "EUR", available: true,  preparationTime: 3 },
  { id: 47, name: "Çay (türkischer Tee)",   category: "drinks",     price: 1.20,  currency: "EUR", available: true,  preparationTime: 3 },

  // DESSERTS
  { id: 48, name: "Baklava (2 Stück)",      category: "desserts",   price: 3.00,  currency: "EUR", available: true,  preparationTime: 1 },
  { id: 49, name: "Künefe",                 category: "desserts",   price: 4.50,  currency: "EUR", available: false, preparationTime: 8 },
  { id: 50, name: "Softeis",               category: "desserts",   price: 2.00,  currency: "EUR", available: true,  preparationTime: 2 },
];

// ----------------------------
// KATEGORIEN
// ----------------------------
export const categories = [
  { id: "fastfood", label: "Döner & Wraps",  icon: "🥙", color: "#e63946" },
  { id: "pizza",    label: "Pizza",           icon: "🍕", color: "#f4a261" },
  { id: "burger",   label: "Burger",          icon: "🍔", color: "#e9c46a" },
  { id: "sides",    label: "Beilagen",        icon: "🍟", color: "#2a9d8f" },
  { id: "sauces",   label: "Soßen",           icon: "🥫", color: "#457b9d" },
  { id: "drinks",   label: "Getränke",        icon: "🥤", color: "#1d3557" },
  { id: "desserts", label: "Desserts",        icon: "🍮", color: "#6d6875" },
];

// ----------------------------
// TISCHE
// ----------------------------
export const tables = [
  { id: 1,  label: "Tisch 1",  seats: 2, status: "free",     zone: "innen" },
  { id: 2,  label: "Tisch 2",  seats: 2, status: "occupied", zone: "innen" },
  { id: 3,  label: "Tisch 3",  seats: 4, status: "free",     zone: "innen" },
  { id: 4,  label: "Tisch 4",  seats: 4, status: "reserved", zone: "innen" },
  { id: 5,  label: "Tisch 5",  seats: 6, status: "occupied", zone: "innen" },
  { id: 6,  label: "Tisch 6",  seats: 6, status: "free",     zone: "innen" },
  { id: 7,  label: "Theke 1",  seats: 1, status: "occupied", zone: "theke" },
  { id: 8,  label: "Theke 2",  seats: 1, status: "free",     zone: "theke" },
  { id: 9,  label: "Theke 3",  seats: 1, status: "occupied", zone: "theke" },
  { id: 10, label: "Außen 1",  seats: 4, status: "free",     zone: "außen" },
  { id: 11, label: "Außen 2",  seats: 4, status: "occupied", zone: "außen" },
  { id: 12, label: "Außen 3",  seats: 6, status: "reserved", zone: "außen" },
];

// ----------------------------
// BESTELLUNGEN (letzte 2 Tage)
// ----------------------------
export const orders = [
  {
    id: "ORD-001", tableId: 2, status: "delivered", createdAt: "2025-05-14T11:05:00",
    items: [
      { menuItemId: 1,  name: "Döner",           qty: 2, unitPrice: 6.00 },
      { menuItemId: 36, name: "Coca Cola",        qty: 2, unitPrice: 1.90 },
    ],
    total: 15.80, paymentMethod: "cash", tip: 1.00,
  },
  {
    id: "ORD-002", tableId: 5, status: "in-progress", createdAt: "2025-05-14T11:20:00",
    items: [
      { menuItemId: 18, name: "Classic Burger",   qty: 1, unitPrice: 7.00 },
      { menuItemId: 19, name: "Cheeseburger",     qty: 1, unitPrice: 7.50 },
      { menuItemId: 25, name: "Pommes groß",      qty: 2, unitPrice: 3.50 },
      { menuItemId: 38, name: "Fanta",            qty: 1, unitPrice: 1.90 },
      { menuItemId: 37, name: "Coca Cola Zero",   qty: 1, unitPrice: 1.90 },
    ],
    total: 25.30, paymentMethod: null, tip: 0,
  },
  {
    id: "ORD-003", tableId: null, status: "delivered", createdAt: "2025-05-14T11:35:00",
    note: "Takeaway",
    items: [
      { menuItemId: 5,  name: "Hähnchen Döner",  qty: 1, unitPrice: 6.00 },
      { menuItemId: 10, name: "Lahmacun Salat",  qty: 1, unitPrice: 5.00 },
      { menuItemId: 40, name: "Ayran",            qty: 2, unitPrice: 1.50 },
    ],
    total: 14.00, paymentMethod: "card", tip: 0,
  },
  {
    id: "ORD-004", tableId: 11, status: "pending", createdAt: "2025-05-14T12:00:00",
    items: [
      { menuItemId: 12, name: "Pizza Salami",     qty: 1, unitPrice: 8.00 },
      { menuItemId: 11, name: "Pizza Margherita", qty: 1, unitPrice: 7.00 },
      { menuItemId: 41, name: "Wasser still",     qty: 2, unitPrice: 1.20 },
    ],
    total: 17.40, paymentMethod: null, tip: 0,
  },
  {
    id: "ORD-005", tableId: 7, status: "delivered", createdAt: "2025-05-14T12:15:00",
    items: [
      { menuItemId: 3,  name: "Doppel Döner",    qty: 1, unitPrice: 9.00 },
      { menuItemId: 31, name: "Knoblauchsoße",   qty: 1, unitPrice: 0.50 },
      { menuItemId: 47, name: "Çay",             qty: 1, unitPrice: 1.20 },
    ],
    total: 10.70, paymentMethod: "cash", tip: 0.30,
  },
  {
    id: "ORD-006", tableId: 4, status: "reserved", createdAt: "2025-05-14T13:00:00",
    note: "Reservierung 14 Uhr – 4 Personen",
    items: [],
    total: 0, paymentMethod: null, tip: 0,
  },
  {
    id: "ORD-007", tableId: null, status: "delivered", createdAt: "2025-05-14T13:10:00",
    note: "Takeaway",
    items: [
      { menuItemId: 7,  name: "Wrap Classic",    qty: 3, unitPrice: 5.50 },
      { menuItemId: 24, name: "Pommes klein",    qty: 3, unitPrice: 2.50 },
      { menuItemId: 36, name: "Coca Cola",       qty: 3, unitPrice: 1.90 },
    ],
    total: 29.70, paymentMethod: "cash", tip: 0.30,
  },
  {
    id: "ORD-008", tableId: 9, status: "delivered", createdAt: "2025-05-14T13:25:00",
    items: [
      { menuItemId: 23, name: "BBQ Burger",      qty: 1, unitPrice: 8.50 },
      { menuItemId: 27, name: "Onion Rings",     qty: 1, unitPrice: 3.00 },
      { menuItemId: 39, name: "Sprite",          qty: 1, unitPrice: 1.90 },
    ],
    total: 13.40, paymentMethod: "card", tip: 1.60,
  },
  {
    id: "ORD-009", tableId: 3, status: "in-progress", createdAt: "2025-05-15T10:45:00",
    items: [
      { menuItemId: 4,  name: "Veg. Döner",      qty: 2, unitPrice: 5.50 },
      { menuItemId: 29, name: "Salat",            qty: 2, unitPrice: 2.50 },
      { menuItemId: 42, name: "Wasser sprudelnd", qty: 2, unitPrice: 1.20 },
    ],
    total: 18.40, paymentMethod: null, tip: 0,
  },
  {
    id: "ORD-010", tableId: 2, status: "pending", createdAt: "2025-05-15T11:00:00",
    items: [
      { menuItemId: 16, name: "Pizza Hähnchen",  qty: 1, unitPrice: 9.00 },
      { menuItemId: 46, name: "Kaffee",          qty: 1, unitPrice: 2.00 },
    ],
    total: 11.00, paymentMethod: null, tip: 0,
  },
];

// ----------------------------
// MITARBEITER
// ----------------------------
export const staff = [
  { id: 1, name: "Mehmet Yilmaz",   role: "Inhaber",     shift: "ganztag",   active: true  },
  { id: 2, name: "Fatima Özdemir",  role: "Kassierer",   shift: "frühschicht", active: true  },
  { id: 3, name: "Kevin Schreiber", role: "Küche",       shift: "frühschicht", active: true  },
  { id: 4, name: "Ayse Kaya",       role: "Service",     shift: "spätschicht", active: true  },
  { id: 5, name: "Lars Hoffmann",   role: "Küche",       shift: "spätschicht", active: false },
  { id: 6, name: "Deniz Aktaş",    role: "Lieferung",   shift: "ganztag",   active: true  },
];

// ----------------------------
// TAGESSTATISTIKEN (letzte 7 Tage)
// ----------------------------
export const dailyStats = [
  { date: "2025-05-09", revenue: 423.50, orders: 41, avgOrderValue: 10.33 },
  { date: "2025-05-10", revenue: 389.20, orders: 37, avgOrderValue: 10.52 },
  { date: "2025-05-11", revenue: 512.80, orders: 52, avgOrderValue:  9.86 },
  { date: "2025-05-12", revenue: 601.40, orders: 58, avgOrderValue: 10.37 },
  { date: "2025-05-13", revenue: 478.60, orders: 45, avgOrderValue: 10.64 },
  { date: "2025-05-14", revenue: 347.90, orders: 33, avgOrderValue: 10.54 },
  { date: "2025-05-15", revenue:  89.40, orders:  9, avgOrderValue:  9.93 }, // heute (laufend)
];

// ----------------------------
// ZUTATEN / LAGERBESTAND
// ----------------------------
export const inventory = [
  { id: 1,  name: "Döner Fleisch",     unit: "kg",   stock: 12.5, minStock: 5,  supplier: "Halal Großhandel GmbH" },
  { id: 2,  name: "Hähnchenbrust",     unit: "kg",   stock:  8.0, minStock: 3,  supplier: "Geflügel Müller" },
  { id: 3,  name: "Fladenbrot",        unit: "Stk",  stock: 80,   minStock: 20, supplier: "Bäckerei Güneş" },
  { id: 4,  name: "Burgerbrötchen",    unit: "Stk",  stock: 60,   minStock: 15, supplier: "Bäckerei Güneş" },
  { id: 5,  name: "Pizzateig 30cm",    unit: "Stk",  stock: 25,   minStock: 10, supplier: "Metro" },
  { id: 6,  name: "Tomate",            unit: "kg",   stock:  6.0, minStock: 2,  supplier: "Gemüse Frisch AG" },
  { id: 7,  name: "Eisbergsalat",      unit: "Stk",  stock: 10,   minStock: 3,  supplier: "Gemüse Frisch AG" },
  { id: 8,  name: "Zwiebeln",          unit: "kg",   stock:  5.0, minStock: 2,  supplier: "Metro" },
  { id: 9,  name: "Paprika",           unit: "kg",   stock:  3.5, minStock: 1,  supplier: "Gemüse Frisch AG" },
  { id: 10, name: "Coca Cola 0,33l",   unit: "Kiste",stock:  4,   minStock: 2,  supplier: "Getränke Schmidt" },
  { id: 11, name: "Fanta 0,33l",       unit: "Kiste",stock:  3,   minStock: 2,  supplier: "Getränke Schmidt" },
  { id: 12, name: "Sprite 0,33l",      unit: "Kiste",stock:  2,   minStock: 2,  supplier: "Getränke Schmidt" },
  { id: 13, name: "Ayran 0,25l",       unit: "Stk",  stock: 48,   minStock: 12, supplier: "Milchgut Süd" },
  { id: 14, name: "Knoblauchsoße",     unit: "Liter",stock:  3.5, minStock: 1,  supplier: "Hackhetti GmbH" },
  { id: 15, name: "Scharf Soße",       unit: "Liter",stock:  2.0, minStock: 1,  supplier: "Hackhetti GmbH" },
  { id: 16, name: "Gouda Käse",        unit: "kg",   stock:  4.0, minStock: 1,  supplier: "Milchgut Süd" },
  { id: 17, name: "Pommes TK 2,5kg",   unit: "Beutel",stock: 8,   minStock: 3,  supplier: "Metro" },
  { id: 18, name: "Servietten",        unit: "Pck",  stock: 15,   minStock: 5,  supplier: "Bürobedarf Löhr" },
  { id: 19, name: "To-Go Boxen",       unit: "Stk",  stock: 200,  minStock: 50, supplier: "Verpackung Nord" },
  { id: 20, name: "Baklava fertig",    unit: "Stk",  stock: 24,   minStock: 8,  supplier: "Süßwaren Ankara" },
];