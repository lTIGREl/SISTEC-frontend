import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RoomService {
    constructor(
        private http: HttpClient){}

    getRooms() {
        return this.http.get('http://localhost:4000/api/rooms');
    }
    getRoom(id: String) {
        return this.http.get(`http://localhost:4000/api/rooms/${id}`);
    }
    registerOut(roomId: String) {
        return this.http.put(`http://localhost:4000/api/rooms/${roomId}`, {isAvailable: true, occupiedBy: null});
    }

}