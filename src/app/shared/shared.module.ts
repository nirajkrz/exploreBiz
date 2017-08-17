
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WindowRef } from './services/window-ref.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    providers: [
        WindowRef
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule { }
