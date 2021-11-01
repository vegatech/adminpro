import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { PagesRoutingModule } from './pages/pages.routing';


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';



const routes  : Routes =[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{ path: '**', component: NopagefoundComponent},
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
      PagesRoutingModule,
      AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
