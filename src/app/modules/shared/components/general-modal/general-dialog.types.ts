import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {GeneralDialogComponent} from "./general-dialog.component";

export interface IGeneralModalOptions {
    status: TGeneralModalStatus;
    title?: string;
    titleHtml?: string;
    titleClass?: string;
    content?: string;
    contentHtml?: string;
    contentClass?: string;
    primaryBtn?: IGeneralModalBtnOptions;
    secondaryBtn?: IGeneralModalBtnOptions;
}

export interface IGeneralModalBtnOptions {
    title?: string;
    status?: any;
    action?: (bsModalRef: BsModalRef) => any;
    useDefaultWidth?: any;
}

export type TGeneralModalStatus = 'error' | 'success' | 'info' | 'warning';
