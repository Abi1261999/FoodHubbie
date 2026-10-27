import type { Food, Restaurant } from "../types";

export const restaurants: Restaurant[] = [
  { id: 1, name: "Saffron & Spice", cuisine: "North Indian • Mughlai", rating: 4.8, time: "25–35 min", fee: 25, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900", offer: "20% OFF", featured: true },
  { id: 2, name: "Napoli House", cuisine: "Italian • Pizza", rating: 4.7, time: "20–30 min", fee: 19, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900", offer: "Free delivery", featured: true },
  { id: 3, name: "Bowl & Bloom", cuisine: "Healthy • Bowls", rating: 4.6, time: "15–25 min", fee: 15, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900", offer: "Buy 1 Get 1" },
  { id: 4, name: "Burger District", cuisine: "Burgers • American", rating: 4.5, time: "20–30 min", fee: 20, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900", offer: "₹100 OFF" },
  { id: 5, name: "Wok This Way", cuisine: "Asian • Chinese", rating: 4.4, time: "30–40 min", fee: 25, image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=900", offer: "15% OFF" },
  { id: 6, name: "Sweet Tooth", cuisine: "Desserts • Bakery", rating: 4.9, time: "15–20 min", fee: 10, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900", offer: "Free dessert" }
];

export const foods: Food[] = [
  { id: 101, name: "Paneer Tikka Bowl", description: "Smoky paneer, mint chutney, pickled onion and fluffy basmati.", price: 249, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800", category: "Indian", veg: true, popular: true, restaurantId: 1 },
  { id: 102, name: "Butter Chicken", description: "Creamy tomato gravy, tender chicken, finished with fresh cream.", price: 329, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800", category: "Indian", veg: false, popular: true, restaurantId: 1 },
  { id: 103, name: "Truffle Mushroom Pizza", description: "Wood-fired crust, wild mushrooms, mozzarella and truffle oil.", price: 399, image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800", category: "Pizza", veg: true, popular: true, restaurantId: 2 },
  { id: 104, name: "Classic Margherita", description: "San Marzano tomato, fresh basil and creamy mozzarella.", price: 299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800", category: "Pizza", veg: true, restaurantId: 2 },
  { id: 105, name: "Green Goddess Bowl", description: "Avocado, quinoa, crunchy greens, chickpeas and lemon tahini.", price: 279, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", category: "Healthy", veg: true, popular: true, restaurantId: 3 },
  { id: 106, name: "Smash Cheeseburger", description: "Double smashed patty, aged cheddar, house sauce and pickles.", price: 289, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", category: "Burgers", veg: false, popular: true, restaurantId: 4 },
  { id: 107, name: "Chilli Garlic Noodles", description: "Wok-tossed noodles, crisp vegetables and a spicy garlic sauce.", price: 229, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800", category: "Asian", veg: true, restaurantId: 5 },
  { id: 108, name: "Berry Cheesecake", description: "Silky baked cheesecake topped with seasonal berry compote.", price: 189, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800", category: "Dessert", veg: true, restaurantId: 6 },
  { id: 109, name: "Crispy Corn Bites", description: "Golden sweet corn, tossed with herbs, lime and house spice.", price: 159, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800", category: "Snacks", veg: true, restaurantId: 1 },
  { id: 110, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten centre.", price: 169, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800", category: "Dessert", veg: true, restaurantId: 6 }
];
export const categories = [
  { name: "All", emoji: "🍽️" }, { name: "Indian", emoji: "🍛" }, { name: "Pizza", emoji: "🍕" },
  { name: "Burgers", emoji: "🍔" }, { name: "Healthy", emoji: "🥗" }, { name: "Asian", emoji: "🍜" }, { name: "Dessert", emoji: "🍰" }
];
