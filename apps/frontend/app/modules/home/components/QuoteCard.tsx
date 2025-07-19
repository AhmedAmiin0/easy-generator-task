import type { QuoteResponse } from '@easy-generator/types'

interface QuoteCardProps {
  quote: QuoteResponse
  isLoading?: boolean
}

export function QuoteCard({ quote, isLoading }: QuoteCardProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <blockquote className="text-xl font-semibold text-gray-800 mb-4 italic leading-relaxed">
        "{quote.content}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <cite className="text-gray-600 font-medium not-italic">
          — {quote.author}
        </cite>
        
        {quote.category && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
            {quote.category}
          </span>
        )}
      </div>
      
      <div className="mt-4 text-xs text-gray-400">
        Saved on {new Date(quote.createdAt).toLocaleDateString()}
      </div>
    </div>
  )
} 