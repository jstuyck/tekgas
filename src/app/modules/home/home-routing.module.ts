
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@app/modules/home/components/home.component';



@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'home', component: HomeComponent
        }
    ])],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
