import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-teams-form',
  templateUrl: './add-teams-form.component.html',
  styleUrls: ['./add-teams-form.component.sass'],
})
export class AddTeamsFormComponent {
    @Output() formSubmission = new EventEmitter<object>(); 

    submitTeamsForm(form: NgForm) {
        console.log(form.value);
        this.formSubmission.emit(form.value)
    }
}
