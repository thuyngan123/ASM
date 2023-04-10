export interface IUser {
    _id: number | string,
    name: string,
    email: string,
    password: string,
    // confirmpassword: string,
}
export interface ILogin {
    email: string,
    password: string,
}