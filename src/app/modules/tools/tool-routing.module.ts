
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NitroxComponent } from '@app/modules/tools/components/nitrox/nitrox.component';



@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'nitrox', component: NitroxComponent
        }
    ])],
    exports: [
        RouterModule
    ]
})
export class ToolRoutingModule { }
