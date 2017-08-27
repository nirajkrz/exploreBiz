import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    NotFoundModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPA6XKip7KNGNsGoXfJO-ZSj8A1hTD1K4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
