export interface IUser {
    _id?: number | string,
    name?: string,
    email: string,
    password: string | number,
    // confirmpassword: string | number,
    role: String
}
export interface ISignup {
    user: IUser[],
    onSignup: (user: IUser) => void
}
export interface ISignin {
    onSignin: (users: IUser) => void

}