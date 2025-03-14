import { jwtDecode } from "jwt-decode";
import { JWTRequest } from "../DTOs/JWTRequest";
import { UserLoginRequest } from "../DTOs/UserLoginRequest";
import { UserState, UserLogin } from "../Entities/UserLogin";
import { Post } from "../HttpClient/ClientMethods";
import { ILoginRepository } from "../Interfaces/ILoginRepository";
import { JWTResponse } from "../DTOs/JWTResponse";

export const LoginRepository: ILoginRepository = {
    loginAsync: async function (user: UserLogin): Promise<UserState> {
        try{
            const res = await Post<JWTRequest>("Login/login", user as UserLoginRequest, false);
            const tokenDecoded = jwtDecode<JWTResponse>(res.token);
            const userLogged: UserState = {
                Name: tokenDecoded.username,
                Role: tokenDecoded.rol,
                Token: res.token,
                IsLogged: true
            };
            return userLogged;
        }
        catch(e){
            throw e;
        }
    },
}