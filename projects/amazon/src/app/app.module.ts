import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { OnewayComponent } from './oneway/oneway.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OnewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [LoginComponent]
  bootstrap: [OnewayComponent]
})
export class AppModule { }
