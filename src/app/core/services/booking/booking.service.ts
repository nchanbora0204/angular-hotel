import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../constants/contants';
import { Booking } from '../../models/booking.model';  // Import model Booking từ frontend

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  // Tạo mới booking
  createBooking(bookingData: Booking): Observable<any> {
    return this.http.post(ApiEndpoints.Booking.CreateBooking, bookingData);
  }
  // Lấy tất cả bookings
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(ApiEndpoints.Booking.GetAllBookings);
  }

  // Lấy chi tiết booking theo ID
  getBookingById(id: string): Observable<Booking> {
    const url = ApiEndpoints.Booking.GetBookingById.replace(':id', id);
    return this.http.get<Booking>(url);
  }
}
