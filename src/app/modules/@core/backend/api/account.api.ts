import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {EApiControllers} from "../../enums";
import {IAuthResponseData, IRegisterResponseData} from "../../interfaces/auth";

@Injectable({providedIn:'root'})
export class AccountApi {
    constructor(private api: HttpService) {
    }

    login(data: FormData) {
        return this.api.post<IAuthResponseData>(`${EApiControllers.Account}/login`, data);
    }

    register(data: any) {
        return this.api.post<IRegisterResponseData>(`${EApiControllers.Account}/register`, data);
    }

    check(type: string) {
        return this.api.get<any>(`${EApiControllers.Account}/check?type=${type}`);
    }
}
