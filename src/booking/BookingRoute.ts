import express from 'express';
import { createBooking, getBookings, getBookingById } from '../booking/BookingController';

const bookingRouter = express.Router();

// Tạo mới booking
bookingRouter.post('/create', createBooking);

// Lấy tất cả bookings
bookingRouter.get('/bookings', getBookings);

// Lấy booking theo ID
bookingRouter.get('/bookings/:id', getBookingById);

export {bookingRouter} ;
