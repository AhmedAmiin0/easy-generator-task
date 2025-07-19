import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@easy-generator/types'
import { getUserFromToken, isTokenExpired, getLocalStorage, removeLocalStorage } from '~/core/utils'

interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isInitialized: boolean
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isInitialized: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            state.isAuthenticated = true
            state.isInitialized = true
        },
        signOut: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            removeLocalStorage('token')
        },
        initializeAuth: (state) => {
            if (typeof window === 'undefined') {
                return
            }
            
            const token = getLocalStorage('token')
            
            if (token && !isTokenExpired(token)) {
                const user = getUserFromToken(token)
                if (user) {
                    state.user = user
                    state.token = token
                    state.isAuthenticated = true
                    state.isInitialized = true
                    return
                }
            }
            
            if (token) {
                removeLocalStorage('token')
            }
            
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isInitialized = true
        },
    },
})

export const { setCredentials, signOut, initializeAuth } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user
export const selectToken = (state: { auth: AuthState }) => state.auth.token
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated
export const selectIsInitialized = (state: { auth: AuthState }) => state.auth.isInitialized
