import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, Food, Order } from "../types";

type AppState = {
  cart: CartItem[]; orders: Order[]; addToCart: (food: Food, customization?: string[]) => void;
  updateQuantity: (key: string, delta: number) => void; clearCart: () => void;
  placeOrder: (address: string) => Order; cartCount: number; subtotal: number;
};
const Context = createContext<AppState | null>(null);
export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => JSON.parse(localStorage.getItem("foodiehub-cart") || "[]"));
  const [orders, setOrders] = useState<Order[]>(() => JSON.parse(localStorage.getItem("foodiehub-orders") || "[]"));
  useEffect(() => { localStorage.setItem("foodiehub-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("foodiehub-orders", JSON.stringify(orders)); }, [orders]);
  const addToCart = (food: Food, customization: string[] = []) => {
    const key = `${food.id}-${customization.slice().sort().join("|")}`;
    setCart(old => {
      const found = old.find(i => i.key === key);
      return found ? old.map(i => i.key === key ? { ...i, quantity: i.quantity + 1 } : i) : [...old, { key, food, quantity: 1, customization }];
    });
  };
  const updateQuantity = (key: string, delta: number) => setCart(old => old.map(i => i.key === key ? { ...i, quantity: i.quantity + delta } : i).filter(i => i.quantity > 0));
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.food.price * item.quantity, 0), [cart]);
  const placeOrder = (address: string) => {
    const order: Order = { id: `FH${Date.now().toString().slice(-7)}`, date: new Date().toISOString(), items: cart, total: subtotal + (subtotal ? 35 : 0), status: "Confirmed", address };
    setOrders(old => [order, ...old]); setCart([]); return order;
  };
  return <Context.Provider value={{ cart, orders, addToCart, updateQuantity, clearCart: () => setCart([]), placeOrder, cartCount: cart.reduce((s, i) => s + i.quantity, 0), subtotal }}>{children}</Context.Provider>;
}
export function useApp() { const value = useContext(Context); if (!value) throw new Error("useApp must be used inside AppProvider"); return value; }
