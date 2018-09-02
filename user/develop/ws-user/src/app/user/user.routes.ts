import {Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {ManageComponent} from './manage/manage.component';
import {OnlineComponent} from './online/online.component';

export const ROUTER_CONFIG: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {path: 'manage', component: ManageComponent},
            {path: 'online', component: OnlineComponent}
        ]
    },
];
