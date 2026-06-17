export type Currency = "EUR" | "USD"

export interface MenuItem {
    id: number
    name: string
    category: string
    price: number
    currency: Currency
    available: boolean
    preparationTime: number
    calories: number

}
