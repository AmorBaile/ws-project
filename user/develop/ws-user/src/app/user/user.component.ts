import {Component, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'ws-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent {

    isCollapsed = false;
    triggerTemplate = null;
    @ViewChild('trigger') customTrigger: TemplateRef<void>;

    /** custom trigger can be TemplateRef **/
    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

}
