import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmitteurComponent } from './add-emitteur/add-emitteur.component';
import{BeneficiereComponent} from './beneficiere/beneficiere.component';
import { RetraitComponent } from './retrait/retrait.component';
import { ShowBenfComponent } from './show-benf/show-benf.component';
import { SMSComponent } from './sms/sms.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full',},
  {path:"addEXp", component: AddEmitteurComponent},
  {path:"addBENF", component: BeneficiereComponent},
  {path:"verifier", component: RetraitComponent},
  {path:"show/:id", component: ShowBenfComponent},
  {path:"sms", component: SMSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
