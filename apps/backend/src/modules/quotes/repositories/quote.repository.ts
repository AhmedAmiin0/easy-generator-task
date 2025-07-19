import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from '../quote.schema';
import { CreateQuoteRequest } from '@easy-generator/types';
import { IQuoteRepository } from './quote-repository.interface';

@Injectable()
export class QuoteRepository implements IQuoteRepository {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>,
  ) {}

  async create(createQuoteDto: CreateQuoteRequest & { userId: string }): Promise<QuoteDocument> {
    const quote = new this.quoteModel({
      ...createQuoteDto,
    });
    return quote.save();
  }

  async findByUserId(userId: string): Promise<QuoteDocument | null> {
    return this.quoteModel.findOne({ userId }).exec();
  }

  async deleteByUserIdAndQuoteId(userId: string, quoteId: string): Promise<boolean> {
    const result = await this.quoteModel.deleteOne({ _id: quoteId, userId }).exec();
    return result.deletedCount > 0;
  }
} 