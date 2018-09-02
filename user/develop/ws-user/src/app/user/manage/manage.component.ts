import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ws-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    dataSet = [
        {
            key    : '1',
            name   : 'John Brown',
            age    : 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key    : '2',
            name   : 'Jim Green',
            age    : 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key    : '3',
            name   : 'Joe Black',
            age    : 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
