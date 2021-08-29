import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient) { }
 
    
    getCrashData() {
        return this.http.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json").pipe(
            tap((data) => {
                //Need to store data in service. for chaching the data 
            })
        );
    }
}
