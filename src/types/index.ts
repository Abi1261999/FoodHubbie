export type Food = { id: number; name: string; description: string; price: number; image: string; category: string; veg: boolean; popular?: boolean; restaurantId: number };
export type Restaurant = { id: number; name: string; cuisine: string; rating: number; time: string; fee: number; image: string; offer: string; featured?: boolean };
export type CartItem = { key: string; food: Food; quantity: number; customization: string[] };
export type Order = { id: string; date: string; items: CartItem[]; total: number; status: string; address: string };
