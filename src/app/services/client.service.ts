import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor(
        private http: HttpClient){}

    register() {
        const data = {
            name: 'John Doe',
            idNumber: '1400960777',
            startDate: new Date(),
        }
        return this.http.post('http://localhost:4000/api/users', data);
    }

}