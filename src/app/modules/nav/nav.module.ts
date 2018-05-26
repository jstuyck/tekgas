import { NgModule } from '@angular/core';

import { NavComponent } from '@app/modules/nav/components/nav/nav.component';
import { SharedModule } from '@app/modules/shared/shared.module';


@NgModule({
    imports: [
        SharedModule
      ],
    declarations: [
      NavComponent
    ],

    exports: [
      NavComponent
    ],
    providers: []
  })

  export class NavModule { }
