import {Injectable} from '@angular/core';
import {AccountApi} from "../api/account.api";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
  timeoutInterval: any;
  redirectAfterLogin:string = '/';

    constructor(private api: AccountApi) {
    }

    login(data: FormData) {
        return this.api.login(data);
    }

    register(data: any) {
        return this.api.register(data);
    }

    check(type: string) {
        return this.api.check(type);
    }

    setTokenInLocalStorage(token: string) {
        localStorage.setItem('token', token);
    }

    getUserFromLocalStorage() {
        // const token = window.localStorage.getItem('token');
        // if (!token) {
        //     return null;
        // }
        // const decodedToken: any = jwt_decode(token);
        // const expirationDate = new Date(decodedToken.exp * 1000);
        // const user = new User(
        //     decodedToken.username,
        //     token,
        //     expirationDate,
        //     decodedToken.userId,
        //     decodedToken?.roles.split(", "),
        // );
        // this.runTimeoutInterval(user);
        // return user;
    }

    runTimeoutInterval(user: User) {
        const todayDate = new Date().getTime();
        const expirationDate = new Date(user.expireDate).getTime();
        const timeInterval = expirationDate - todayDate;

        // this.timeoutInterval = setTimeout(() => {
        //     this.store.dispatch(autoLogout());
        // }, timeInterval);
    }

    logout() {
        localStorage.clear();
        // if (this.timeoutInterval) {
        //     clearTimeout(this.timeoutInterval);
        //     this.timeoutInterval = null;
        // }
    }
}
