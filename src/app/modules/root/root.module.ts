import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RootComponent } from './components/root/root.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { NavModule } from '@app/modules/nav/nav.module';
import { AppRoutingModule } from '@app/modules/root/root-routing.module';
import { HomeModule } from '@app/modules/home/home.module';
import { ToolModule } from '@app/modules/tools/tool.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    SharedModule,
    HomeModule,
    NavModule,
    ToolModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
