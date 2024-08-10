import { UserState } from '../data/Entities/UserLogin';
import { baseStorage } from '../services/baseStorage';
const { GetData }= baseStorage();
export const initialUser: UserState = GetData<UserState>('user') || {
    Name: "",
    Role: "",
    IsLogged: false
}

