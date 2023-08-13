import { Component, EventEmitter, Input } from '@angular/core';
import { TeamsService } from 'src/app/dashboard/services/teams.service';
import { SelectedTeam } from 'src/app/models/selected-team';
import { Team } from 'src/app/models/team';

@Component({
    selector: 'app-bracket',
    templateUrl: './bracket.component.html',
    styleUrls: ['./bracket.component.sass'],
})
export class BracketComponent {
    constructor(private teamsService: TeamsService) {}

    electedTeams!: Team[];

    chosen: any = {};
    rounds: number = 3;
    teamsPerRound: number[] = [8, 4, 2]

   
    semiFinalists: any = { //names must be in alphabetical order
        "semiAFirst": '',
        "semiASecond": '',
        "semiBFirst": '',
        "semiBSecond": '',
    };

    finalists: any = {
        "finalistA": '',
        "finalistB": ''
    } ;

    champion: Team = {}  as Team;
    championChosed: boolean = false;

    @Input() teamSelected: EventEmitter<object> = new EventEmitter<object>();

    ngOnInit() {
        console.log(this.champion)
        this.teamsService.getTeams().subscribe({
            next: (response) => {
                this.electedTeams = response;
            },
            error: (error) => {
                console.error(
                    error,
                    'Error at getting teams on bracket component'
                );
            },
        });
    }

   
    onSemiFinalistSelect(selectedTeam: SelectedTeam) {
        const { index, team } = selectedTeam;

        switch (index) {
            case 0:
            case 1:
                this.semiFinalists['semiAFirst'] = team;
                break;
            case 2:
            case 3:
                this.semiFinalists['semiASecond'] = team;
                break;
            case 4:
            case 5:
                this.semiFinalists['semiBFirst'] = team;
                break;
            case 6:
            case 7:
                this.semiFinalists['semiBSecond'] = team;
                break;
        }
        
    }

    onFinalistSelect(selectedTeam: SelectedTeam) {
       const { index, team } = selectedTeam;

       if(index < 2) {
        this.finalists['finalistA'] = team;
       } else if (index>=2 && index < 8) {
        this.finalists['finalistB'] = team;
       }
    }

    onChampionsSelect(selectedTeam: SelectedTeam) {
        this.champion = selectedTeam.team;
        this.championChosed = true
    }    

}
