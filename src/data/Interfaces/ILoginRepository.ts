import { UserState, UserLogin } from "../Entities/UserLogin";

export interface ILoginRepository {
    loginAsync(user:UserLogin): Promise<UserState>;
}