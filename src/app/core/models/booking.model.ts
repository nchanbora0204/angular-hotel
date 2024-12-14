export interface Booking {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    roomId: string; // ID của phòng
    checkInDate: string;
    checkOutDate: string;
    numberOfAdults: number;
    numberOfChildren: number;
    specialRequests?: string;
    createdAt: string;
  }
  