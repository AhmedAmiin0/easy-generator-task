import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getRoute } from '../constants/routes'

// Define the base URL for your API
const baseUrl = import.meta.env.VITE_API_URL

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            headers.set('content-type', 'application/json')
            return headers
        },
        responseHandler: async (response) => {
            if (response.status === 401) {
                localStorage.removeItem('token')
                window.location.href = getRoute('LOGIN')
                return Promise.reject(response)
            }
            return response
        }
    }),
    tagTypes: ['User', 'Auth'],
    endpoints: () => ({}),
}) 