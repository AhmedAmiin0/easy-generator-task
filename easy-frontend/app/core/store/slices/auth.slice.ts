import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '~/core'

interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: {
        id: "1",
        email: "test@test.com",
        name: "John Doe",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    token: null,
    isAuthenticated: true,
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
        },
        signOut: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },

    },

})

export const { setCredentials, signOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user
export const selectToken = (state: { auth: AuthState }) => state.auth.token
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated
