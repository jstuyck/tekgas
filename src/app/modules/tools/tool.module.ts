import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/modules/home/components/home.component';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { ToolRoutingModule } from '@app/modules/tools/tool-routing.module';
import { NitroxComponent } from '@app/modules/tools/components/nitrox/nitrox.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { TrimixComponent } from '@app/modules/tools/components/trimix/trimix.component';

@NgModule({
    imports: [
        SharedModule,
        ToolRoutingModule
    ],
    declarations: [
        NitroxComponent,
        TrimixComponent
    ],
    exports: [
        NitroxComponent
    ]
})
export class ToolModule { }
