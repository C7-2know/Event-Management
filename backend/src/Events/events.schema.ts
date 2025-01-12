import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false })
export class Event extends Document {
  @Prop({ required: false })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: false })
  date: Date;

  @Prop({ required: false })
  category: string;

  @Prop({ required: false })
  organizer: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
export type EventDocument = Event & Document;
