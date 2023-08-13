import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { Team } from 'src/app/models/team';
import { EMPTY, catchError, switchMap } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
    constructor(private teamsService: TeamsService) {}

    @Input() newTeamSubmission: EventEmitter<object> =
        new EventEmitter<object>();
    
    @Input() teamDeletion: EventEmitter<Team> = new EventEmitter<Team>();

    teamsData: Team[] = [];
    isLoading: boolean = true;
    @Output() teamLength:number = this.teamsData.length

    ngOnInit() {
        this.teamsService.getTeams().subscribe({
            next: (response) => {
                this.teamsData = response;
                this.isLoading = false;
            },
            error: (error) => {
                console.error(error, 'Error getiing teams');
            },
        });
    }

    onFormSubmission(formValue: object) {
        this.teamsService
            .addTeams(formValue)
            .pipe(
                switchMap(() => this.teamsService.getTeams()),
                catchError((error) => {
                    console.error('Error on adding new team:', error);
                    return EMPTY;
                })
            )
            .subscribe({
                next: (response) => {
                    this.teamsData = response;
                },
                error: (error) => {
                    console.error(
                        'Error on getting teams after form submission:',
                        error
                    );
                },
            });
    }

    onTeamRemoval(team: Team) {
        const { id, name } = team;
        this.teamsService.deleteTeam(id).pipe(
            switchMap(() => this.teamsService.getTeams()),
            catchError((error) => {
                console.error(`Error deleting team ${id}`, error);
                return EMPTY;
            })
        )
        .subscribe({
            next: (response) => {
                this.teamsData = response;
            },
            error: (error) => {
                console.error(
                    'Error on getting teams after form submission:',
                    error
                );
            },
        });
    }
}
