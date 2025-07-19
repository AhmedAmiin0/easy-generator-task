import { User } from './user.types';

// Auth request types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  name: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
}

// Auth response types
export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginResponse extends AuthResponse {}

export interface SignupResponse extends AuthResponse {}

export interface LogoutResponse {
  message: string;
  success: boolean;
}

// JWT Payload
export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

// Error response type
export interface ApiErrorResponse {
  message: string;
  error?: string;
  statusCode: number;
  timestamp: string;
}

// Auth state
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface UserResponseDto {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponseDto {
    user: UserResponseDto;
    token: string;
    expiresIn: number;
}

export interface LogoutResponseDto {
    message: string;
    success: boolean;
}

export interface JwtPayloadDto {
    sub: string
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
} 