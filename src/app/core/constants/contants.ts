const apiUrl = 'http://localhost:4102/api';

export const ApiEndpoints = {
    Auth: {
        Login: `${apiUrl}/users/login`,
        Register: `${apiUrl}/users/register`,
        Me: `${apiUrl}/users/me`
    },
    Room: {
        GetAllRoom: `${apiUrl}/roomControl/allrooms`,
        GetRoomById: `${apiUrl}/roomControl/:id`
    },
    Booking: {
        CreateBooking: `${apiUrl}/bookings/create`,  // Tạo mới booking
        GetAllBookings: `${apiUrl}/bookings`,  // Lấy tất cả bookings
        GetBookingById: `${apiUrl}/bookings/:id`  // Lấy chi tiết booking theo ID
    }
    
};

export  const LocalStorage ={
    token: 'user_tokken'
}; 
