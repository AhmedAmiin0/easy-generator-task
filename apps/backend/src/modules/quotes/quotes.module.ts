import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { QuoteRepository } from './repositories/quote.repository';
import { ApiNinjasModule } from '@/core/api-ninjas';
import { Quote, QuoteSchema } from './quote.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }]),
    ApiNinjasModule,
  ],
  controllers: [QuotesController],
  providers: [QuotesService, QuoteRepository],
  exports: [QuotesService],
})
export class QuotesModule {} 