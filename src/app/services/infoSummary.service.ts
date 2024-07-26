import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class InfoSummaryService {
    constructor(
        private http: HttpClient){}

    getInfo() {
        return this.http.get('http://localhost:4000/api/info');
    }

}