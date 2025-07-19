import { api } from "~/core";
import type {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
    LogoutResponse,
} from '@easy-generator/types'

import { AUTH_ENDPOINTS } from "./auth.endpoints";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: AUTH_ENDPOINTS.LOGIN.url,
                method: AUTH_ENDPOINTS.LOGIN.method,
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),

        signup: builder.mutation<SignupResponse, SignupRequest>({
            query: (userData) => ({
                url: AUTH_ENDPOINTS.SIGNUP.url,
                method: AUTH_ENDPOINTS.SIGNUP.method,
                body: userData,
            }),
            invalidatesTags: ['Auth'],
        }),

        logout: builder.mutation<LogoutResponse, void>({
            query: () => ({
                url: AUTH_ENDPOINTS.LOGOUT.url,
                method: AUTH_ENDPOINTS.LOGOUT.method,
            }),
            invalidatesTags: ['Auth'],
        }),
    }),
})

export const {
    useLoginMutation,
    useSignupMutation,
    useLogoutMutation
} = authApi 