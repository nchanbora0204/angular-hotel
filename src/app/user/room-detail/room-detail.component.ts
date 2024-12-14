import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../core/services/roomServices/room.service';
import { BookingService } from '../../core/services/booking/booking.service';// Import BookingService
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../core/models/room.model'; // Đảm bảo bạn import đúng kiểu Room
import { Booking } from '../../core/models/booking.model'; // Import model Booking

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  bookingForm: FormGroup;
  loading: boolean = true;
  error: string | null = null;

  captchaAnswer?: number;  // Câu trả lời CAPTCHA
  captchaQuestion?: string; 

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private bookingService: BookingService, // Khởi tạo BookingService
    private fb: FormBuilder
  ) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      roomType: [''],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      adults: [1, [Validators.required, Validators.min(1)]],
      children: [0, [Validators.required, Validators.min(0)]],
      specialRequests: [''],
      captcha: ['', Validators.required]
    });
    this.generateCaptcha();
  }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.roomService.getRoomById(roomId).subscribe({
        next: (data: any) => {
          this.room = data.data;
          this.fillBookingForm(); // Điền thông tin phòng vào form
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading room details';
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.bookingForm.valid && this.validateCaptcha()) {
      // Kiểm tra nếu các trường không có giá trị, gán giá trị mặc định
      const bookingData = {
        ...this.bookingForm.value,
        numberOfAdults: this.bookingForm.value.numberOfAdults || 1,
        numberOfChildren: this.bookingForm.value.numberOfChildren || 0,
        roomId: this.room?._id
      };
      console.log('Booking data:', bookingData); //
  
      this.bookingService.createBooking(bookingData).subscribe({
        next: (response) => {
          alert('Booking successful!');
        },
        error: (err) => {
          this.error = 'Error creating booking';
        }
      });
    } else if (!this.validateCaptcha()) {
      alert('Incorrect CAPTCHA answer. Please try again.');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
  // Tự động điền thông tin phòng vào form
  fillBookingForm(): void {
    if (this.room) {
      this.bookingForm.patchValue({
        roomType: this.room.roomname,  // Hoặc có thể để giá trị khác nếu cần
        // Điền thêm các thông tin phòng khác vào form nếu cần
      });
    }
  }

  generateCaptcha(): void {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    this.captchaAnswer = num1 + num2;
    this.captchaQuestion = `${num1} + ${num2} = ?`;
  }

  // Kiểm tra CAPTCHA
  validateCaptcha(): boolean {
    const userAnswer = this.bookingForm.get('captcha')?.value;
    return userAnswer === this.captchaAnswer;
  }
}
