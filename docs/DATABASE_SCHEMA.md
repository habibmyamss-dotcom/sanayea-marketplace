# 📊 Database Schema

## Collections Overview

### 1. Users Collection

```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: String (enum: ['customer', 'craftsman', 'admin']),
  profilePicture: String (URL),
  bio: String,
  address: String,
  city: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  rating: Number (0-5),
  reviewCount: Number,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Services Collection

```javascript
{
  _id: ObjectId,
  craftsman: ObjectId (ref: User),
  title: String,
  description: String,
  category: String (enum: ['carpentry', 'welding', 'mechanics', 'electrical', 'plumbing', 'painting', 'other']),
  images: [String] (URLs),
  basePrice: Number,
  priceUnit: String (enum: ['per_hour', 'per_day', 'per_project']),
  rating: Number,
  reviewCount: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Orders Collection

```javascript
{
  _id: ObjectId,
  customer: ObjectId (ref: User),
  craftsman: ObjectId (ref: User),
  service: ObjectId (ref: Service),
  description: String,
  location: {
    address: String,
    city: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  scheduledDate: Date,
  status: String (enum: ['pending', 'accepted', 'in_progress', 'completed', 'cancelled']),
  totalPrice: Number,
  commission: Number (platform commission),
  paymentStatus: String (enum: ['unpaid', 'paid', 'refunded']),
  paymentMethod: String,
  stripePaymentId: String,
  messages: [
    {
      sender: ObjectId (ref: User),
      text: String,
      timestamp: Date
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Reviews Collection

```javascript
{
  _id: ObjectId,
  order: ObjectId (ref: Order),
  reviewer: ObjectId (ref: User),
  reviewee: ObjectId (ref: User),
  rating: Number (1-5),
  comment: String,
  createdAt: Date
}
```

## Indexes

```javascript
// Users
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ city: 1 })
db.users.createIndex({ role: 1 })
db.users.createIndex({ "coordinates": "2dsphere" })

// Services
db.services.createIndex({ craftsman: 1 })
db.services.createIndex({ category: 1 })
db.services.createIndex({ isActive: 1 })
db.services.createIndex({ rating: -1 })

// Orders
db.orders.createIndex({ customer: 1 })
db.orders.createIndex({ craftsman: 1 })
db.orders.createIndex({ status: 1 })
db.orders.createIndex({ createdAt: -1 })
db.orders.createIndex({ paymentStatus: 1 })

// Reviews
db.reviews.createIndex({ order: 1 }, { unique: true })
db.reviews.createIndex({ reviewee: 1 })
db.reviews.createIndex({ reviewer: 1 })
```

## Relationships

```
User (Craftsman) --> Service
                  --> Order (as craftsman)
                  --> Review (as reviewee)

User (Customer) --> Order (as customer)
                --> Review (as reviewer)

Order --> Service
       --> Messages
       --> Review
```
