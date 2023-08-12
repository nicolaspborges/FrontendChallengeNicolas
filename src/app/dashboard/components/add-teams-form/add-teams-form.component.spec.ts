import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamsFormComponent } from './add-teams-form.component';

describe('AddTeamsFormComponent', () => {
  let component: AddTeamsFormComponent;
  let fixture: ComponentFixture<AddTeamsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTeamsFormComponent]
    });
    fixture = TestBed.createComponent(AddTeamsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
