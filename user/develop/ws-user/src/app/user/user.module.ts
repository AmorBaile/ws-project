import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './user.routes';
import {ManageComponent} from './manage/manage.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { OnlineComponent } from './online/online.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [UserComponent, ManageComponent, OnlineComponent]
})
export class UserModule {
}
