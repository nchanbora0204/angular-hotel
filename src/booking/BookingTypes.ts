import mongoose, { Document } from 'mongoose';

export interface IBooking extends Document {
  fullName: string;
  email: string;
  phone?: string;
  roomId: mongoose.Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfAdults: number;
  numberOfChildren: number;
  specialRequests?: string;
  createdAt: Date;
}
