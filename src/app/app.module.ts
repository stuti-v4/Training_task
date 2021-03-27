import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { UseraddComponent } from './useradd/useradd.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, UseraddComponent, ShowuserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
