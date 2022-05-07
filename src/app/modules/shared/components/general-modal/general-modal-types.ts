import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {GeneralModalComponent} from "./general-modal.component";
import {TSharedButtonStatus} from "..";
import {TSharedButtonWidth} from "../util";

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
    bsModalOptions?: ModalOptions<GeneralModalComponent>;
}

export interface IGeneralModalBtnOptions {
    title?: string;
    status?: TSharedButtonStatus;
    action?: (bsModalRef: BsModalRef) => any;
    useDefaultWidth?: TSharedButtonWidth;
}

export type TGeneralModalStatus = 'error' | 'success' | 'info' | 'warning';
