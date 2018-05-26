import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RootComponent } from './components/root/root.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { NavModule } from '@app/modules/nav/nav.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    SharedModule,
    NavModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
