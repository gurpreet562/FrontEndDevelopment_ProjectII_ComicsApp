import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './Components/home/home.component';
import { ProfileComponent }  from './Components/profile/profile.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent,HomeComponent,ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})
export class AppModule { }
