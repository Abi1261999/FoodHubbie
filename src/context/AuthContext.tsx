import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
export type UserRole = "customer" | "restaurant" | "admin";
export type SessionUser = { id: string; name: string; email: string; role: UserRole } | null;
type AuthValue = { user: SessionUser; signIn: (email: string, role?: UserRole) => void; signOut: () => void };
const AuthContext = createContext<AuthValue | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
 const [user, setUser] = useState<SessionUser>(() => { try { const raw=localStorage.getItem("foodiehub-user"); return raw ? JSON.parse(raw) : null; } catch { return null; } });
 const value = useMemo<AuthValue>(() => ({ user, signIn: (email, role="customer") => { const next={id: email, name: email.split("@")[0] || "FoodieHub user", email, role}; localStorage.setItem("foodiehub-user", JSON.stringify(next)); setUser(next); }, signOut: () => { localStorage.removeItem("foodiehub-user"); setUser(null); } }), [user]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() { const value=useContext(AuthContext); if(!value) throw new Error("useAuth must be used inside AuthProvider"); return value; }
