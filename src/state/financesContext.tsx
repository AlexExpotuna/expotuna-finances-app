import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialUser, initialListPrices } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useFinancesContext';
import { User } from '../data/Entities/User';
import { ListPriceErrorResult } from '../data/Entities/ListPriceErrorResult';


interface SurveyContextProps{
    children: JSX.Element;
}

export const FinancesContext = ({ children }: SurveyContextProps) => {
  const [user, setUser] = useState<UserState>(initialUser);
  const [isSuccess, setIsSuccess] = useState(true);
  const [errors, setErrors] = useState<ListPriceErrorResult[]>([]) 
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
    isSuccess,
    errors,
    setErrors,
    setIsSuccess,
    setAppListPrices,
    setOpenCreateDialog,
    setOpenDeleteDialog,
    setOpenEditDialog,
    setAppUsers,
    setUser,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
