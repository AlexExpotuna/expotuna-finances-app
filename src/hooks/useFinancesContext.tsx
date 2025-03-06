import { createContext, useContext } from "react";
import { UserState } from "../data/Entities/UserLogin";
import { User } from "../data/Entities/User";
import { ListPrices } from "../data/Entities/ListPrices";

export interface MyContextProps {
  user: UserState;
  appUsers: User[];
  appListPrices: ListPrices;
  openEditDialog: boolean;
  openDeleteDialog: boolean;
  openCreateDialog: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
  setAppUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setAppListPrices: React.Dispatch<React.SetStateAction<ListPrices>>;
  setOpenCreateDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = createContext<MyContextProps>(null!);
export const useFinanceContext = () => useContext(MyContext);
