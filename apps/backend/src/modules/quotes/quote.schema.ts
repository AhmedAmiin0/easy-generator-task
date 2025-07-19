import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Quote {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true, default: Date.now })
  quotedAt: Date;
}

export type QuoteDocument = Quote & Document;
export const QuoteSchema = SchemaFactory.createForClass(Quote); 