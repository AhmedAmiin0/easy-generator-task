export interface Quote {
    id: string;
    content: string;
    author: string;
    category: string;
    quotedAt: string;
    userId: string;
}
export interface CreateQuoteRequest {
    content: string;
    author: string;
    category: string;
}
export interface QuoteResponse {
    id: string;
    content: string;
    author: string;
    category: string;
    createdAt: string;
}
export interface ExternalQuoteResponse {
    quote: string;
    author: string;
    category: string;
}
