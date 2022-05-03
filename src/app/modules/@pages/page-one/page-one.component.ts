import {Component, OnInit} from '@angular/core';
import {interval, timer} from "rxjs";
import {map, mapTo} from "rxjs/operators";

@Component({
    selector: 'app-page-one',
    templateUrl: './page-one.component.html',
    styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
    test$ = interval(1000).pipe(map(v => {
        return v + Math.random();
    }))

    constructor() {
    }

    ngOnInit(): void {
    }

}
