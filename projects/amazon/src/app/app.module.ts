import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivepocComponent } from './directivepoc/directivepoc.component';
import { DirectivespocComponent } from './directivespoc/directivespoc.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OnewayComponent,
    TwowaybindingComponent,
    DirectivepocComponent,
    DirectivespocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  // bootstrap: [LoginComponent]
  // bootstrap: [OnewayComponent]
  bootstrap: [TwowaybindingComponent]
})
export class AppModule { }
