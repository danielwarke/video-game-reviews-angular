import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() menuClickEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onMenuClicked(): void {
        this.menuClickEvent.emit();
    }

}
