import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from 'src/app/models/team';

@Injectable({
    providedIn: 'root',
})
export class TeamsService {
    constructor(private http: HttpClient) {}

    apiUrl = environment.apiUrl;

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(this.apiUrl + 'teams').pipe(
            catchError((error) => {
                console.log(error);
                return throwError(
                    () => new Error('Error at getting teams', error)
                );
            })
        );
    }

    addTeams(body: object): Observable<object> {
        return this.http.post(this.apiUrl + 'teams', body).pipe(
            catchError((error) => {
                return throwError(
                    () => new Error('Error adding team', error)
                );
            })
        );
    }
}
