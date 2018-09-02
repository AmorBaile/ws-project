import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'ws-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
    
    @Input() title: string;
    @Output() clickEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    handleClick() {
        this.clickEvent.emit();
    }

}
