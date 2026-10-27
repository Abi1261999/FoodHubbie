import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Order } from "../types";
import { useApp } from "./CartContext";
type OrderValue = { orders: Order[]; placeOrder: (address: string) => Order };
const OrderContext = createContext<OrderValue | null>(null);
/** Exposes the order API already persisted by CartContext to order-focused pages. */
export function OrderProvider({ children }: { children: ReactNode }) { const app=useApp(); const value=useMemo(()=>({orders:app.orders, placeOrder:app.placeOrder}),[app.orders]); return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>; }
export function useOrders() { const value=useContext(OrderContext); if(!value) throw new Error("useOrders must be used inside OrderProvider"); return value; }
