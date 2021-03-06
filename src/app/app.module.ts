import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherComponent } from './weather/weather.component';
import { SportComponent } from './sport/sport.component';
import {HomeComponent } from './home/home.component';

import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SportComponent,
    HomeComponent,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: 'tiempo', component: WeatherComponent },
      { path: 'sport', component: SportComponent },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
