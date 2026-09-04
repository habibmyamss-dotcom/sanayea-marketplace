# 📚 Sanayea API Documentation

## Authentication Endpoints

### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "Ahmed",
  "lastName": "Bennani",
  "email": "ahmed@example.com",
  "password": "secure_password",
  "phone": "+212612345678",
  "role": "craftsman"
}

Response: { token, user }
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "ahmed@example.com",
  "password": "secure_password"
}

Response: { token, user }
```

## User Endpoints

### Get User Profile
```
GET /api/users/:id
Headers: Authorization: Bearer {token}

Response: { user profile }
```

### Update Profile
```
PUT /api/users/:id
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "bio": "Expert carpenter with 10 years experience",
  "profilePicture": "url",
  "address": "123 Street, Casablanca",
  "phone": "+212612345678"
}
```

## Service Endpoints

### List Services
```
GET /api/services?category=carpentry&city=Casablanca&page=1

Response: { services: [], total, pages }
```

### Get Service Details
```
GET /api/services/:id

Response: { service details }
```

### Create Service (Craftsman only)
```
POST /api/services
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Wood Carpentry",
  "description": "Custom furniture and repairs",
  "category": "carpentry",
  "basePrice": 500,
  "priceUnit": "per_project",
  "images": ["url1", "url2"]
}
```

## Order Endpoints

### Create Order
```
POST /api/orders
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "craftsman": "craftsman_id",
  "service": "service_id",
  "description": "Fix my cabinet door",
  "location": {
    "address": "123 Street",
    "city": "Casablanca",
    "coordinates": { "latitude": 33.5731, "longitude": -7.5898 }
  },
  "scheduledDate": "2024-12-20T10:00:00Z",
  "totalPrice": 500
}
```

### Get My Orders
```
GET /api/orders/my-orders
Headers: Authorization: Bearer {token}

Response: { orders: [] }
```

### Update Order Status
```
PUT /api/orders/:id/status
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "in_progress"
}
```

## Payment Endpoints

### Create Payment Intent
```
POST /api/payments/create-intent
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": "order_id",
  "amount": 500
}

Response: { clientSecret }
```

### Confirm Payment
```
POST /api/payments/confirm
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": "order_id",
  "paymentIntentId": "pi_xxx"
}
```

## Review Endpoints

### Add Review
```
POST /api/reviews
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": "order_id",
  "revieweeId": "user_id",
  "rating": 5,
  "comment": "Excellent work!"
}
```

### Get Reviews for User
```
GET /api/reviews/user/:userId

Response: { reviews: [] }
```

## Message Endpoints

### Send Message
```
POST /api/messages
Headers: Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": "order_id",
  "text": "When can you start?"
}
```

### Get Order Messages
```
GET /api/messages/order/:orderId
Headers: Authorization: Bearer {token}
```
