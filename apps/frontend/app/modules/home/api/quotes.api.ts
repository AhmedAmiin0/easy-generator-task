import { api } from '~/core/store/api'
import type { QuoteResponse } from '@easy-generator/types'

export const quotesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserQuote: builder.query<QuoteResponse, boolean>({
      query: (refresh: boolean) => `/quotes?refresh=${refresh}`,
      providesTags: ['Quote'],
    }),
  }),
})

export const { useGetUserQuoteQuery } = quotesApi 