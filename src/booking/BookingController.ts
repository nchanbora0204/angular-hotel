import { Request, Response } from 'express';
import Booking from './BookingSchema';
import { Room } from '../rooms/RoomTypes'; // Đảm bảo rằng bạn có một model cho phòng
import RoomSchema from '../rooms/RoomSchema';
import BookingSchema from './BookingSchema';

// Tạo mới booking
export const createBooking = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        fullName,
        email,
        phone,
        roomId,  // Lấy roomId từ body
        checkInDate,
        checkOutDate,
        numberOfAdults,
        numberOfChildren,
        specialRequests,
      } = req.body;
  
      // Kiểm tra phòng có tồn tại không
      const room = await RoomSchema.findById(roomId); // Dùng roomId từ body
      if (!room) {
        res.status(404).json({ message: 'Room not found' });
        return;
      }
  
      // Tạo booking mới
      const booking = new BookingSchema({
        fullName,
        email,
        phone,
        roomId,
        checkInDate,
        checkOutDate,
        numberOfAdults,
        numberOfChildren,
        specialRequests,
      });
  
      await booking.save();
      res.status(201).json({
        message: 'Booking created successfully',
        booking,
        data:{}
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Lấy tất cả bookings
export const getBookings = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookings = await Booking.find().populate('roomId', 'roomname price');
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Lấy chi tiết booking theo ID
export const getBookingById = async (req: Request, res: Response): Promise<void> => {
  try {
    const booking = await Booking.findById(req.params.id).populate('roomId', 'roomname price');
    if (!booking) {
      res.status(404).json({ message: 'Booking not found' });
      return;
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
