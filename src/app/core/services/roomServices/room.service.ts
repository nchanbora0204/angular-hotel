import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiEndpoints } from '../../constants/contants';
import { Room } from '../../models/room.model'; // Import Room model

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private httpClient: HttpClient) {}

  // Lấy danh sách tất cả các phòng
  getAllRooms(): Observable<Room[]> {
    return this.httpClient.get<{ data: Room[] }>(ApiEndpoints.Room.GetAllRoom).pipe(
      map((response) => response.data)
    );
  }

  // Lấy thông tin phòng theo ID
  getRoomById(id: string): Observable<Room> {
    const url = ApiEndpoints.Room.GetRoomById.replace(':id', id);
    return this.httpClient.get<Room>(url);
  }
}
