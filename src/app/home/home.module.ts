import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    AgmCoreModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
