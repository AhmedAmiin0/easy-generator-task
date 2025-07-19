import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

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
    }),
    tagTypes: ['User', 'Auth', 'Quote'],
    endpoints: () => ({}),
}) 