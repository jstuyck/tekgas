import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/modules/home/components/home.component';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
