# FoodieHub — React + Vite + TypeScript

A responsive food-delivery frontend demo with a customer storefront, restaurant/menu discovery, customisable dishes, a LocalStorage-backed cart and order history, checkout validation, order confirmation, and a multi-section admin console with analytics charts.

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
foodiehub/
├── public/images/
├── src/
│   ├── app/                 # app shell and route table
│   ├── components/          # common, layout, restaurant, food, cart, admin
│   ├── pages/               # customer, restaurant, checkout, orders, admin
│   ├── context/             # cart, auth, order contexts
│   ├── hooks/
│   ├── services/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── App.tsx              # compatibility entry point
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── index.html
└── README.md
```

## Main routes
- `/` — customer homepage
- `/restaurants` — restaurant directory
- `/restaurant/:id` — restaurant menu
- `/cart` — cart
- `/checkout` — checkout
- `/order-confirmation/:id` — confirmation and tracking timeline
- `/orders` — order history
- `/profile` — customer profile
- `/admin` — admin dashboard and management sections

## Notes
- Cart and demo orders persist in browser LocalStorage.
- `FIRSTBITE` and `FOODIE10` are sample coupons; coupon helper is in `src/utils/coupons.ts`.
- Authentication is a local demo context only. No backend is included. Payment processing, secure auth, real-time GPS tracking, refunds, payouts, and persistent multi-user data require backend services/integrations.
- Sample food imagery uses remote Unsplash URLs; put local assets in `public/images/` if preferred.
