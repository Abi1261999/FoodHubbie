import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, MapPin, ArrowRight, Star, Clock, Plus, Minus, Leaf, Flame, UtensilsCrossed, Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Food, Restaurant } from "../../types";
import { useApp } from "../../context/AppContext";

export function Header() {
  const { cartCount } = useApp(); const [mobileOpen, setMobileOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link to="/" className="brand"><span className="brand-mark"><UtensilsCrossed size={20}/></span>foodie<span>hub</span></Link>
    <div className="delivery-location"><MapPin size={16}/><span><small>Delivering to</small><b>Hyderabad, India</b></span><ChevronRight size={15}/></div>
    <nav className={mobileOpen ? "main-nav open" : "main-nav"}><NavLink to="/">Discover</NavLink><a href="/#restaurants" onClick={() => setMobileOpen(false)}>Restaurants</a><NavLink to="/orders">My orders</NavLink><NavLink to="/admin">Admin</NavLink></nav>
    <div className="nav-actions"><Link to="/cart" className="cart-button"><ShoppingBag size={18}/><span>Cart</span>{cartCount > 0 && <i>{cartCount}</i>}</Link><button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <MenuIcon/>}</button></div>
  </div></header>;
}
export function FoodCard({ food, onCustomize }: { food: Food; onCustomize: (food: Food) => void }) {
  return <motion.article className="food-card" whileHover={{ y: -4 }} transition={{ duration: .18 }}>
    <div className="food-image"><img src={food.image} alt={food.name}/>{food.popular && <span className="popular-tag"><Flame size={12}/> Popular</span>}<span className={food.veg ? "veg-dot" : "nonveg-dot"}>{food.veg ? <Leaf size={11}/> : "●"}</span></div>
    <div className="food-content"><div className="food-title-row"><h3>{food.name}</h3><strong>₹{food.price}</strong></div><p>{food.description}</p><div className="food-bottom"><span className="food-category">{food.category}</span><button className="add-button" onClick={() => onCustomize(food)}><Plus size={16}/> Add</button></div></div>
  </motion.article>;
}
export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card"><div className="restaurant-image"><img src={restaurant.image} alt={restaurant.name}/><span className="offer-tag">{restaurant.offer}</span><span className="heart-tag">♡</span></div><div className="restaurant-content"><div className="restaurant-title"><h3>{restaurant.name}</h3><span className="rating"><Star size={13} fill="currentColor"/>{restaurant.rating}</span></div><p>{restaurant.cuisine}</p><div className="restaurant-meta"><span><Clock size={14}/>{restaurant.time}</span><span>₹{restaurant.fee} delivery</span></div></div></Link>;
}
export function FoodModal({ food, close }: { food: Food | null; close: () => void }) {
  const { addToCart } = useApp(); const [extras, setExtras] = useState<string[]>([]); const [note, setNote] = useState("");
  if (!food) return null;
  const choices = ["Extra cheese", "Spicy", "Add dip"];
  const add = () => { addToCart(food, [...extras, ...(note.trim() ? [`Note: ${note.trim()}`] : [])]); setExtras([]); setNote(""); close(); };
  return <div className="modal-backdrop" onClick={close}><motion.div className="food-modal" initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} onClick={e => e.stopPropagation()}>
    <button className="modal-close" onClick={close}><X size={19}/></button><img className="modal-food-image" src={food.image} alt={food.name}/><div className="modal-body"><div className="food-title-row"><h2>{food.name}</h2><strong>₹{food.price}</strong></div><p>{food.description}</p><h4>Make it yours</h4>{choices.map(c => <label className="check-row" key={c}><span>{c}</span><input type="checkbox" checked={extras.includes(c)} onChange={e => setExtras(old => e.target.checked ? [...old, c] : old.filter(x => x !== c))}/></label>)}<label className="field-label">Special instructions<textarea value={note} onChange={e => setNote(e.target.value)} placeholder="E.g. dressing on the side" rows={2}/></label><button className="primary-button full-button" onClick={add}>Add to cart · ₹{food.price + extras.length * 25}<ArrowRight size={17}/></button></div>
  </motion.div></div>;
}
export function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: React.ReactNode }) { return <div className="section-title"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{action}</div>; }
