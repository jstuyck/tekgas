import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DiveConstant } from '@app/modules/shared/models/constant';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tool-nitrox',
    templateUrl: './nitrox.component.html',
    styleUrls: ['./nitrox.component.scss']
})

export class NitroxComponent implements OnInit {
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

    ngOnInit () {
        this.ResetPpO2();
        this.RestPercO2();
    }

    ResetPpO2() {
        this.ppo2.setValue( DiveConstant.DEF_PPO2);
    }

    RestPercO2() {
        this.perco2.setValue( DiveConstant.AIR_O2_PERC);
    }

    GetMaxDepth(): number {
        return ( this.ppo2.value / (this.perco2.value / 100)  - 1 ) * 10;
    }
 }
