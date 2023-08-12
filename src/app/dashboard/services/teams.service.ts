import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    getTeams(): Observable<object> {

        return this.http.get(this.apiUrl + 'teams')
    }
}
