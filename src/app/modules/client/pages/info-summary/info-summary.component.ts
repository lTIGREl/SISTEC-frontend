import { Component, OnInit } from '@angular/core';
import { InfoSummaryService } from '../../../../services/infoSummary.service';
import { NgFor, NgIf } from '@angular/common';
import { RoomService } from '../../../../services/room.service';
import { Room } from '../../../../interfaces/room.interface';
import { User } from '../../../../interfaces/user.interface';
import { ClientService } from '../../../../services/client.service';

@Component({
  selector: 'app-info-summary',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './info-summary.component.html',
  styleUrl: './info-summary.component.scss'
})
export class InfoSummaryComponent implements OnInit {
  constructor(private infoSummaryService: InfoSummaryService, private roomService: RoomService, private clientService: ClientService ) { }
  data: any = [{}];
  rooms : Room[] = [];
  users : User[] = [];
  dateStr: String = '';
  ngOnInit(): void {
    this.infoSummaryService.getInfo().subscribe((data) => {
      this.data = data;
    });
    this.roomService.getRooms().subscribe((response: any) => {
      this.initializeRooms(response);
    });
    this.clientService.getClients().subscribe((response: any) => {
      this.initializeUsers(response);
    });
  
  }
  initializeRooms(rooms: Room[]) {
    for (let room of rooms) {
      let data : Room = {
        id: room.id,
        isAvailable: room.isAvailable,
        occupiedBy: room.occupiedBy
      }
      this.rooms.push(data);
    }
  }
  initializeUsers(users: User[]) {  
    for (let user of users) {
      let data : User = {
        id: user.id,
        name: user.name,
        idNumber: user.idNumber,
        endDate: user.endDate
      }
      if (user.endDate != null) {
        this.dateStr = new Date(user.endDate).toLocaleString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
        this.users.push(data);
      }
    }
  }

}
