import mongoose from 'mongoose';
import { IBooking } from './BookingTypes';  // Đảm bảo import đúng kiểu IBooking từ file BookingTypes.ts

const BookingSchema = new mongoose.Schema<IBooking>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Chỉ cần unique: true, không cần thêm AC
  },
  phone: {
    type: String,
    required: [false, 'Phone number is required'], // Không bắt buộc
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,  // Khai báo rõ ObjectId
    ref: 'Room',  // Tên model Room
    required: [true, 'Room ID is required'],
  },
  checkInDate: {
    type: Date,
    required: [true, 'Check-in date is required'],
  },
  checkOutDate: {
    type: Date,
    required: [true, 'Check-out date is required'],
  },
  numberOfAdults: {
    type: Number,
    required: [true, 'Number of adults is required'],
    min: [1, 'Number of adults must be at least 1'],
  },
  numberOfChildren: {
    type: Number,
    required: [true, 'Number of children is required'],
    min: [0, 'Number of children must be at least 0'],
  },
  specialRequests: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true }); // Thêm timestamps cho thời gian tạo và sửa

export default mongoose.model<IBooking>('Booking', BookingSchema);
