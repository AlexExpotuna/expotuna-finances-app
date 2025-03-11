import { ExcelColumnApp } from "../data/Entities/ExcelDownload";
import { ListPrices } from "../data/Entities/ListPrices";
import { User } from "../data/Entities/User";
import { UserState } from "../data/Entities/UserLogin";
import { baseStorage } from "../services/baseStorage";
const { GetData } = baseStorage();

export const initialUser: UserState =
  GetData("user-inventory-app") ||
  ({
    Name: "",
    Role: "",
    Token: "",
    IsLogged: false,
  } as UserState);

export const initialAppUser: User = {
  id: 0,
  identificacion: "",
  nombres: "",
  apellidos: "",
  correo: "",
  username: "",
  contraseña: "",
  rol: "",
  intentosFallidos: 0,
};

export const initialListPrices:ListPrices = {
  FileInput: null
}

export const initialExcelTemplateData: any[] = [
  { ProductCode: "CODE-1", PriceList: "1" },
  { ProductCode: "CODE-2", PriceList: "2" }
]

export const columns: ExcelColumnApp[] = [
  { title: "ProductCode", dataKey: "ProductCode"},
  { title: "PriceList", dataKey: "PriceList"},
]