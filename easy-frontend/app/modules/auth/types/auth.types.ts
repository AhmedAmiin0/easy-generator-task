import type { User } from "~/core"


// Auth request types
export interface LoginRequest {
    email: string
    password: string
}

export interface SignupRequest {
    email: string
    name: string
    password: string
    confirmPassword?: string
    terms?: boolean
}



export interface AuthResponse {
    user: User
    token: string
    refreshToken: string
    expiresIn: number
}

export interface LoginResponse extends AuthResponse { }

export interface SignupResponse extends AuthResponse { }



export interface LogoutResponse {
    message: string
    success: boolean
}



// Error response type
export interface ApiErrorResponse {
    message: string
    error?: string
    statusCode: number
    timestamp: string
} 