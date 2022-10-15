import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from '../login-guard.service';
import { OffersComponent } from './offers.component';

const offerroutes: Routes = [

  {
    path: '',
    component: OffersComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(offerroutes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
