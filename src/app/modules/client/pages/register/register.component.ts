import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, NgClass} from '@angular/common';
import { Router } from '@angular/router';
import { ClientService } from '../../../../services/client.service';
import { RoomService } from '../../../../services/room.service';
import { Room } from '../../../../interfaces/room.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, NgIf, NgFor, NgClass]
})
export class RegisterComponent implements OnInit {
  rooms : Room[] = [];
  errorOccurs: Boolean = false;
  registerForm: FormGroup;
  roomSelected: number | undefined;

  constructor(private fb: FormBuilder, private clientService: ClientService, private roomService: RoomService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      idNumber: ['', Validators.required],
      room: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.roomService.getRooms().subscribe((response: any) => {
      this.initializeRooms(response);
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.clientService.register(this.registerForm.value).subscribe(response => {
        console.log('Register response:', response);
        this.router.navigate(['/client/infoSummary']);
      });
    } else {
      this.errorOccurs = true;
        setTimeout(() => {
          this.errorOccurs = false;
        }, 3000);
      console.log('Form is invalid');
    }
  }
  selectRoom(room: string) {
    this.registerForm.get('room')!.setValue(room);
    this.roomSelected = parseInt(room);
    console.log('Room selected:', room);
    
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
}