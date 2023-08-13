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

    getRandomNumber() {
        return Math.floor(Math.random() * 70);
    };

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
        const capNumber = this.getRandomNumber();
        const newBody = {...body, "capUrl": `assets/images/team-leaders/${capNumber}.png`}
        console.log()
        return this.http.post(this.apiUrl + 'teams', newBody).pipe(
            catchError((error) => {
                return throwError(
                    () => new Error('Error adding team', error)
                );
            })
        );
    }

    deleteTeam(id: number): Observable<any> {
        return this.http.delete(this.apiUrl + `teams/${id}`).pipe(
            catchError((error)=> {
                return throwError(
                    () => new Error('Error removing team', error)
                )
            })
        )
    }
}
