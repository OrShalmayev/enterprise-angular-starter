export interface IAuthResponseData {
    access_token: string;
    expires_in: number;
    userId: string;
    username:string;
    roles: string[]
}

export interface IRegisterResponseData {
    id: string;
}