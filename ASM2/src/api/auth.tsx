import { IUser } from "../interface/user";
import instance from "./instance";

// export const getAllUser = () => {
//     return instance.get('signin');
// }
export const create = (user: IUser) => {
    return instance.post('/signup', user);

}
export const login = (users: IUser) => {
    return instance.post('/signin', users);

}