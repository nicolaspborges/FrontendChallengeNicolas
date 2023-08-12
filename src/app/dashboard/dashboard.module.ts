import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddTeamsFormComponent } from './components/add-teams-form/add-teams-form.component';
import { FormsModule } from '@angular/forms';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from './services/teams.service';

@NgModule({
    declarations: [HomeComponent, AddTeamsFormComponent, TeamsListComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [TeamsService],
})
export class DashboardModule {}
