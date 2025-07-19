import { IsString, IsOptional } from 'class-validator';
import { CreateQuoteRequest, QuoteResponse } from '@easy-generator/types';

export class CreateQuoteDto implements CreateQuoteRequest {
  @IsString()
  content: string;

  @IsString()
  author: string;

  @IsString()
  category: string;
}

export class QuoteResponseDto implements QuoteResponse {
  id: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;

  static fromQuoteDocument(quote: any): QuoteResponseDto {
    return {
      id: quote._id.toString(),
      content: quote.content,
      author: quote.author,
      category: quote.category,
      createdAt: quote.createdAt
    };
  }
} 