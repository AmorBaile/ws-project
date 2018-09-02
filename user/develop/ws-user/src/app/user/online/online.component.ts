import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
    dataSet = [
        {
            key    : '1',
            name   : '张三',
            age    : 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key    : '2',
            name   : '李四',
            age    : 42,
            address: 'London No. 1 Lake Park'
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}
