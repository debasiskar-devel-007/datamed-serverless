import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { Rm3aComponent } from './rm3a/rm3a.component';

import { BloodCardTestingComponent } from './blood-card-testing/blood-card-testing.component';
import { AllergyTestingComponent } from './allergy-testing/allergy-testing.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},

  {path:'team', component: TeamComponent}, 
  {path:'rm3atesting', component: Rm3aComponent}, 
  {path:'blood-card-testing', component: BloodCardTestingComponent}, 
  {path:'allergy-testing', component: AllergyTestingComponent}, 
  {path:'contact-us', component: ContactComponent}, 
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
