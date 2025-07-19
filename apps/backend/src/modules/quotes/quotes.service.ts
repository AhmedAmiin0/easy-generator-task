import { Injectable } from '@nestjs/common';
import { QuoteResponseDto } from './dto';
import { QuoteRepository } from './repositories/quote.repository';
import { ApiNinjasService } from '@/core/api-ninjas';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class QuotesService {
  constructor(
    private quoteRepository: QuoteRepository,
    private apiNinjasService: ApiNinjasService,
  ) {}

  async getOrCreateUserQuote(userId: string, refresh: boolean): Promise<QuoteResponseDto> {
    const existingQuote = await this.quoteRepository.findByUserId(userId);
    
    if (existingQuote && !refresh) {
      return QuoteResponseDto.fromQuoteDocument(existingQuote);
    }

    const externalQuote = await firstValueFrom(this.apiNinjasService.getRandomQuote()).then(res => res[0]); 
    const savedQuote = await this.quoteRepository.create({
      content: externalQuote.quote,
      author: externalQuote.author,
      category: externalQuote.category,
      userId,
    });

    return QuoteResponseDto.fromQuoteDocument(savedQuote);
  }
} 