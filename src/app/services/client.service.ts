import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor(
        private http: HttpClient) { }
    getClients() {
        return this.http.get('http://localhost:4000/api/users');
    }
    register(data: any) {
        return this.http.post('http://localhost:4000/api/users', data);
    }
    registerOut(id: String) {
        return this.http.put(`http://localhost:4000/api/users/${id}`, { endDate: new Date() });
    }


}