import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-teams-form',
  templateUrl: './add-teams-form.component.html',
  styleUrls: ['./add-teams-form.component.sass'],
})
export class AddTeamsFormComponent {
    @Output() formSubmission = new EventEmitter<object>();
    @Input() teamsQuantity!: number;

    teamName: any = ''

    submitTeamsForm(form: NgForm) {
        this.formSubmission.emit(form.value)
        this.teamName = ''
    }
}
