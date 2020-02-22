import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { Rm3aComponent } from './rm3a/rm3a.component';


const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},

  {path:'team', component: TeamComponent}, 
  {path:'rm3atesting', component: Rm3aComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
