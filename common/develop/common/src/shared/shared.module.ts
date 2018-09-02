import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HelloComponent } from './component/hello/hello.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [HelloComponent],
    declarations: [HelloComponent]
})
export class SharedModule {
}
