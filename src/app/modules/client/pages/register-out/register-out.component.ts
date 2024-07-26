import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { InfoSummaryService } from '../../../../services/infoSummary.service';
import { RoomService } from '../../../../services/room.service';
import { ClientService } from '../../../../services/client.service';
import { Room } from '../../../../interfaces/room.interface';

@Component({
  selector: 'app-register-out',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './register-out.component.html',
  styleUrl: './register-out.component.scss'
})
export class RegisterOutComponent implements OnInit {
  constructor(private infoSummaryService: InfoSummaryService, private roomService: RoomService, private clientService: ClientService) { }

  data: any = [{}];

  ngOnInit(): void {
    this.infoSummaryService.getInfo().subscribe((data) => {
      this.data = data;
    });
  }

  registerOut(roomId: String) {
    this.roomService.getRoom(roomId).subscribe((room: any) => {
      console.log(room);
      this.roomService.registerOut(roomId).subscribe((newRoom) => {
        this.clientService.registerOut(room.occupiedBy.id).subscribe((data) => {
        window.location.reload();});
      });
      });
    
  }
}
