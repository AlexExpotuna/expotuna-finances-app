import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialUser, initialListPrices } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useFinancesContext';
import { User } from '../data/Entities/User';


interface SurveyContextProps{
    children: JSX.Element;
}

export const FinancesContext = ({ children }: SurveyContextProps) => {
  const [user, setUser] = useState<UserState>(initialUser);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [appUsers, setAppUsers] = useState<User[]>([]);
  const [appListPrices, setAppListPrices] = useState(initialListPrices);
  const value: MyContextProps = {
    user,
    appUsers,
    openEditDialog,
    openDeleteDialog,
    openCreateDialog,
    appListPrices,
    setAppListPrices,
    setOpenCreateDialog,
    setOpenDeleteDialog,
    setOpenEditDialog,
    setAppUsers,
    setUser,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
