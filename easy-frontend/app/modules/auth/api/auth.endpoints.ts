
import { HTTP_METHODS, type HttpMethod } from "~/core"

export const AUTH_ENDPOINTS = {
    LOGIN: {
        url: '/auth/login',
        method: HTTP_METHODS.POST,
    },
    SIGNUP: {
        url: '/auth/signup',
        method: HTTP_METHODS.POST,
    },
    LOGOUT: {
        url: '/auth/logout',
        method: HTTP_METHODS.POST,
    },
    REFRESH_TOKEN: {
        url: '/auth/refresh',
        method: HTTP_METHODS.POST,
    },
    FORGOT_PASSWORD: {
        url: '/auth/forgot-password',
        method: HTTP_METHODS.POST,
    },
    RESET_PASSWORD: {
        url: '/auth/reset-password',
        method: HTTP_METHODS.POST,
    },
    VERIFY_EMAIL: {
        url: '/auth/verify-email',
        method: HTTP_METHODS.POST,
    },
    RESEND_VERIFICATION: {
        url: '/auth/resend-verification',
        method: HTTP_METHODS.POST,
    },
} as const


export interface EndpointConfig {
    url: string
    method: HttpMethod
} 