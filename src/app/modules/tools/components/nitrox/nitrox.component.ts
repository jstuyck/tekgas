import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DiveConstant } from '@app/modules/shared/models/constant';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tool-nav',
    templateUrl: './nitrox.component.html',
    styleUrls: ['./nitrox.component.scss']
})

export class NitroxComponent {
    dConst =  DiveConstant;

    ppo2: FormControl = new FormControl('value', [
        Validators.max(2.2),
        Validators.min(0),
        Validators.required
    ]);

    perco2: FormControl = new FormControl('value', [
        Validators.max(100),
        Validators.min(0),
        Validators.required
    ]);

    GetMaxDepth(): number {
        return ( this.ppo2.value / (this.perco2.value / 100)  - 1 ) * 10;
    }
 }
