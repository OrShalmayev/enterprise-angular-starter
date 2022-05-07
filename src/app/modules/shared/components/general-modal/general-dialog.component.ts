import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {isObservable, Subject} from "rxjs";
import {BsModalRef, ModalOptions} from "ngx-bootstrap/modal";
import {IGeneralModalBtnOptions, TGeneralModalStatus} from "./general-dialog.types";
import {isNull} from 'lodash';
import {finalize, take} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'shared-general-dialog',
    templateUrl: './general-dialog.component.html',
    styleUrls: ['./general-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralDialogComponent<T> implements OnInit {
    private _destroy$ = new Subject<void>();

    constructor(
        public dialogRef: MatDialogRef<GeneralDialogComponent<T>>,
        @Inject(MAT_DIALOG_DATA) public data: T,
    ) {
    }

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
