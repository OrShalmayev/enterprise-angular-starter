import {Component, OnInit} from '@angular/core';
import {interval, timer} from "rxjs";
import {map, mapTo} from "rxjs/operators";
import {GeneralDialogComponent} from "../../shared/components";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-page-one',
    templateUrl: './page-one.component.html',
    styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
    test$ = interval(1000).pipe(map(v => {
        return v + Math.random();
    }));

    constructor(
        public dialog: MatDialog,
    ) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(GeneralDialogComponent, {
            width: '250px',
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit(): void {
    }

}
