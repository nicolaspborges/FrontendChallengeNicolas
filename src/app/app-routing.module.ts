import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'brackets', loadChildren: ()=> import("./brackets/brackets.module").then(m => m.BracketsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
