# 🔨 Sanayea Marketplace

**Marketplace Platform for Craftsmen and Service Providers in Morocco**

A full-featured marketplace connecting customers with skilled craftsmen and service providers (carpenters, welders, electricians, plumbers, mechanics, etc.).

## 🎯 Features

### For Customers
- 🔍 Search and filter craftsmen by category and location
- 📍 View craftsmen on interactive map
- ⭐ Check ratings and reviews
- 💬 Direct messaging with craftsmen
- 📋 Place and track service orders
- 💳 Secure payment via Stripe
- 📱 Responsive mobile design

### For Craftsmen
- 👤 Create professional profile
- 🎨 Showcase portfolio and past work
- 📊 Track orders and earnings
- 💬 Communicate with customers
- ⭐ Build reputation with reviews
- 📈 Analytics and insights

### For Admin
- 👥 User management
- 🏪 Service verification
- 💰 Commission management
- 📊 Platform analytics

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js** - API server
- **MongoDB** - Database
- **Stripe** - Payment processing
- **JWT** - Authentication

### Frontend
- **React** - UI library
- **Next.js** - Full-stack framework
- **Tailwind CSS** - Styling
- **Leaflet/Mapbox** - Maps integration
- **Socket.io** - Real-time messaging

## 📁 Project Structure

```
sanayea-marketplace/
├── models/              # Database models
│   ├── User.js
│   ├── Service.js
│   ├── Order.js
│   └── Review.js
├── routes/              # API routes
├── controllers/         # Business logic
├── middleware/          # Auth, validation
├── client/              # React/Next.js frontend
├── server.js            # Express server
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB
- Stripe account

### Installation

1. Clone the repository
```bash
git clone https://github.com/habibmyamss-dotcom/sanayea-marketplace.git
cd sanayea-marketplace
```

2. Install dependencies
```bash
npm install
cd client && npm install && cd ..
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Update `.env` with your configuration

5. Start the server
```bash
npm run dev
```

6. Start the client (in another terminal)
```bash
npm run client
```

## 📊 Database Models

### User
- firstName, lastName, email, phone
- role: customer | craftsman | admin
- profilePicture, bio, address, city
- coordinates (latitude, longitude)
- rating, reviewCount

### Service
- craftsman (ref: User)
- title, description, category
- images, basePrice, priceUnit
- rating, reviewCount

### Order
- customer, craftsman, service
- location, scheduledDate
- status, totalPrice, commission
- paymentStatus, stripePaymentId
- messages (real-time chat)

### Review
- order, reviewer, reviewee
- rating (1-5), comment

## 💳 Payment Flow

1. Customer places order
2. Stripe payment processing
3. Payment confirmation
4. Craftsman notified
5. Service completion
6. Review and rating

## 🗺️ Features Roadmap

- [ ] User authentication & profiles
- [ ] Service listing & search
- [ ] Order management system
- [ ] Real-time messaging
- [ ] Payment integration
- [ ] Rating & review system
- [ ] Map integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Mobile app (React Native)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💼 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for Moroccan Craftsmen**
