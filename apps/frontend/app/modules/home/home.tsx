import { SubmitButton } from '~/core/ui/components'
import { useGetUserQuoteQuery } from './api/quotes.api'
import { QuoteCard } from './components/QuoteCard'
import { useState } from 'react'

export function meta() {
  return [
    { title: "Task App - Dashboard" },
    { name: "description", content: "Your personal task management dashboard" },
  ];
}

export default function Home() {
  const [refresh, setRefresh] = useState(false)

  const { data: quote, isLoading, error, refetch } = useGetUserQuoteQuery(refresh)

  const handleNewQuote = () => {
    setRefresh(true)
    refetch()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          You have successfully logged in and can now access all the features available to authenticated users.
          Here's your personal quote for inspiration.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Your Quote</h2>
          <SubmitButton
            onClick={handleNewQuote}
            variant="secondary"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Get New Quote'}
          </SubmitButton>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 mb-4">Failed to load your quote</p>
            <SubmitButton
              onClick={handleNewQuote}
              variant="primary"
              size="sm"
            >
              Try Again
            </SubmitButton>
          </div>
        ) : (
          <QuoteCard quote={quote!} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
} 