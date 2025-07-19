# Easy Generator - Full Stack Authentication App

A modern full-stack authentication application built with **NestJS** (backend) and **React** (frontend), featuring JWT authentication, MongoDB integration, and comprehensive API documentation.

## 🚀 **Features**

### **Backend (NestJS)**
- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **MongoDB Integration** - NoSQL database with Mongoose ODM
- ✅ **DTO Validation** - Input validation with class-validator
- ✅ **Swagger Documentation** - Auto-generated API docs
- ✅ **Repository Pattern** - Clean architecture with data access layer
- ✅ **Password Hashing** - Secure bcrypt password encryption
- ✅ **Token Service** - Dedicated JWT token management
- ✅ **Configuration Management** - Environment-based config
- ✅ **CORS Support** - Cross-origin resource sharing

### **Frontend (React)**
- ✅ **React 18** - Modern React with hooks
- ✅ **TypeScript** - Type-safe development
- ✅ **RTK Query** - Efficient data fetching and caching
- ✅ **Redux Toolkit** - Predictable state management
- ✅ **React Router** - Client-side routing
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Form Validation** - User input validation
- ✅ **Protected Routes** - Authentication-based routing
- ✅ **Responsive Design** - Mobile-friendly UI

## 📁 **Project Structure**

```
easy-generator/
├── easy-backend/              # NestJS Backend
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/          # Authentication module
│   │   │   │   ├── dto/       # Data Transfer Objects
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.module.ts
│   │   │   └── users/         # Users module
│   │   │       ├── repositories/
│   │   │       ├── user.schema.ts
│   │   │       └── users.module.ts
│   │   ├── core/              # Core utilities
│   │   │   ├── config/        # Configuration
│   │   │   ├── database/      # Database setup
│   │   │   └── jwt/           # JWT utilities
│   │   ├── utils/             # Utility functions
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── nest-cli.json
│
└── frontend/                  # React Frontend
    ├── app/
    │   ├── core/              # Core utilities
    │   │   ├── store/         # Redux store
    │   │   ├── ui/            # UI components
    │   │   └── interfaces/    # TypeScript interfaces
    │   ├── modules/
    │   │   ├── auth/          # Authentication module
    │   │   │   ├── api/       # API calls
    │   │   │   ├── screens/   # Login/Signup pages
    │   │   │   └── layouts/   # Auth layouts
    │   │   └── home/          # Home module
    │   ├── root.tsx
    │   └── routes.ts
    ├── package.json
    └── vite.config.ts
```

## 🛠️ **Installation & Setup**

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- pnpm (recommended) or npm

### **Backend Setup**

1. **Navigate to backend directory:**
   ```bash
   cd easy-backend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Create environment file:**
   Create `.env` file in `easy-backend/` root:
   ```env
   # Application Configuration
   NODE_ENV=development
   PORT=3001
   GLOBAL_PREFIX=api
   CORS_ORIGINS=http://localhost:3000,http://localhost:5173
   APP_NAME=Easy Auth API
   APP_VERSION=1.0.0

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/easy-auth

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-in-production-must-be-32-chars-minimum
   JWT_EXPIRES_IN=7d
   ```

4. **Start MongoDB:**
   ```bash
   # Using Docker (recommended)
   docker run -d -p 27017:27017 --name mongodb mongo:7
   
   # Or start local MongoDB service
   mongod
   ```

5. **Start the backend:**
   ```bash
   pnpm run start:dev
   ```

   ✅ Backend running at: `http://localhost:3001`
   📚 Swagger docs at: `http://localhost:3001/api/docs`

### **Frontend Setup**

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the frontend:**
   ```bash
   pnpm run dev
   ```

   ✅ Frontend running at: `http://localhost:5173`

## 📖 **API Documentation**

### **Authentication Endpoints**

#### **POST** `/api/auth/signup`
Register a new user.

**Request Body:**
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

#### **POST** `/api/auth/login`
Authenticate existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** Same as signup

#### **POST** `/api/auth/logout`
Logout user (client-side token invalidation).

**Response:**
```json
{
  "message": "Logged out successfully",
  "success": true
}
```

### **Interactive API Testing**

Visit `http://localhost:3001/api/docs` for interactive Swagger documentation where you can:
- Test all endpoints directly
- See request/response schemas
- Use JWT authentication
- View validation rules

## 🎯 **Usage Examples**

### **Testing with cURL**

1. **Register a user:**
   ```bash
   curl -X POST http://localhost:3001/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "name": "Test User",
       "password": "password123"
     }'
   ```

2. **Login:**
   ```bash
   curl -X POST http://localhost:3001/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "password123"
     }'
   ```

### **Frontend Usage**

1. **Navigate to** `http://localhost:5173`
2. **Click "Sign Up"** to create a new account
3. **Fill the form** with valid information
4. **Login** with your credentials
5. **Access protected routes** after authentication

## 🔒 **Security Features**

- **Password Hashing:** bcrypt with 12 salt rounds
- **JWT Tokens:** Secure token-based authentication
- **Input Validation:** Comprehensive DTO validation
- **CORS Protection:** Configurable cross-origin policies
- **Environment Variables:** Secure configuration management
- **Type Safety:** Full TypeScript implementation

## 🏗️ **Architecture**

### **Backend Architecture**
- **Modular Design:** Feature-based modules
- **Repository Pattern:** Data access abstraction
- **Dependency Injection:** IoC container
- **Configuration Management:** Environment-based config
- **Middleware:** CORS, validation, authentication
- **Error Handling:** Global exception filters

### **Frontend Architecture**
- **Component-Based:** Reusable React components
- **State Management:** Redux Toolkit + RTK Query
- **Route Protection:** Authentication guards
- **Type Safety:** TypeScript interfaces
- **Styling:** Tailwind CSS utility classes
- **Build Tool:** Vite for fast development

## 🚀 **Development**

### **Backend Development**
```bash
cd easy-backend

# Development mode with hot reload
pnpm run start:dev

# Build for production
pnpm run build

# Run tests
pnpm run test

# Lint code
pnpm run lint
```

### **Frontend Development**
```bash
cd frontend

# Development mode with hot reload
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## 📦 **Production Deployment**

### **Backend Deployment**
1. Set production environment variables
2. Use a production MongoDB instance
3. Generate a strong JWT secret (32+ characters)
4. Set `NODE_ENV=production`
5. Configure proper CORS origins
6. Use a process manager (PM2, Docker)

### **Frontend Deployment**
1. Set `VITE_API_URL` to your production API
2. Build the application: `pnpm run build`
3. Deploy the `dist` folder to your hosting service
4. Configure routing for SPA (single-page application)

## 🛡️ **Environment Variables**

### **Backend (.env)**
| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3001` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/easy-auth` |
| `JWT_SECRET` | JWT signing secret | Required (32+ chars) |
| `JWT_EXPIRES_IN` | Token expiration | `7d` |
| `CORS_ORIGINS` | Allowed CORS origins | `http://localhost:3000,http://localhost:5173` |

### **Frontend (.env)**
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001/api` |

**Happy coding! 🎉**