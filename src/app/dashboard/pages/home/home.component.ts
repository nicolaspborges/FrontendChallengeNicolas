import { Component, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {

    @Input() newTeamSubmission: EventEmitter<string> = new EventEmitter<string>;

    teamsData: string[] = [];

    onFormSubmission(formValue: string) {
        this.teamsData.push(formValue)
    }

}
