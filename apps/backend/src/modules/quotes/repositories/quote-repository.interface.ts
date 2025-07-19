import { QuoteDocument } from '../quote.schema';
import { CreateQuoteRequest } from '@easy-generator/types';

export interface IQuoteRepository {
  create(createQuoteDto: CreateQuoteRequest & { userId: string }): Promise<QuoteDocument>;
  findByUserId(userId: string): Promise<QuoteDocument | null>;
  deleteByUserIdAndQuoteId(userId: string, quoteId: string): Promise<boolean>;
} 