# Authentication System Setup

This NestJS backend provides a complete authentication system with JWT tokens, DTO validation, and MongoDB integration.

## Features

- ✅ User registration (signup)
- ✅ User login with email/password
- ✅ JWT token generation
- ✅ Password hashing with bcrypt
- ✅ MongoDB integration with Mongoose
- ✅ DTO validation with class-validator
- ✅ CORS configuration for frontend
- ✅ Global validation pipes
- ✅ Error handling

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or Docker)
- pnpm

## Setup Instructions

### 1. Install Dependencies
Already installed:
```bash
pnpm install
```

### 2. Start MongoDB

#### Option A: Using Docker (Recommended)
```bash
docker-compose up -d
```

#### Option B: Local MongoDB
Make sure MongoDB is running on `mongodb://localhost:27017`

### 3. Environment Variables
Create a `.env` file in the backend root:
```env
MONGODB_URI=mongodb://localhost:27017/easy-auth
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
PORT=3001
```

### 4. Start the Backend
```bash
pnpm run start:dev
```

The API will be available at: `http://localhost:3001/api`

## API Endpoints

### Authentication Endpoints

#### POST /api/auth/signup
Register a new user.

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": "64f...",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2023-...",
    "updatedAt": "2023-..."
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 604800
}
```

#### POST /api/auth/login
Login with email and password.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** Same as signup

#### POST /api/auth/logout
Logout (returns success message).

**Response:**
```json
{
  "message": "Logged out successfully",
  "success": true
}
```

## Testing with curl

### 1. Create a user
```bash
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "password": "password123"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 3. Test protected route (if any)
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:3001/api/protected-endpoint
```

## Validation

The API includes comprehensive validation:

- **Email**: Must be valid email format
- **Name**: 2-50 characters
- **Password**: Minimum 6 characters
- **Required fields**: All fields are required

## Security Features

- Passwords are hashed with bcrypt (12 rounds)
- JWT tokens with configurable expiration
- CORS enabled for frontend communication
- Input validation and sanitization
- Error handling without sensitive data exposure

## Integration with Frontend

The frontend is already configured to work with this backend:
- Base URL: `http://localhost:3001/api`
- JWT tokens automatically sent in Authorization header
- Response format matches frontend expectations

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  name: String (required),
  password: String (hashed, required),
  createdAt: Date,
  updatedAt: Date
}
```

## Development Notes

- JWT secret should be changed in production
- MongoDB connection string can be configured via environment variables
- CORS origins should be restricted in production
- Consider implementing refresh token rotation for enhanced security 