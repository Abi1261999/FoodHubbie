import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, RestaurantsPage, RestaurantPage, CartPage, CheckoutPage, ConfirmationPage, OrdersPage, ProfilePage } from "../pages/customer/CustomerPages";
import { AdminPage } from "../pages/admin/AdminPage";

/** Central route table for the FoodieHub customer and admin experiences. */
export function AppRouter() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/restaurants" element={<RestaurantsPage />} />
    <Route path="/restaurant/:id" element={<RestaurantPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/order-confirmation/:id" element={<ConfirmationPage />} />
    <Route path="/orders" element={<OrdersPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/admin/*" element={<AdminPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
