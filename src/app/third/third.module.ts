import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { ThirdComponent } from './third.component';
import { ThirdRoutingModule } from './third.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ThirdRoutingModule
    ],
    exports: [],
    declarations: [ ThirdComponent ],
    providers: [],

})
export class ThirdModule { }
