import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../core/services/roomServices/room.service';
import {Room} from '../../core/models/room.model'


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  loading = true;
  error: string | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data;
      },
      error: (err) => {
        console.error('Error fetching rooms:', err);
        this.error = 'Không thể tải danh sách phòng.';
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
