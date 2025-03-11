import { ListPriceErrorResult } from "../data/Entities/ListPriceErrorResult";
import { ListPrices } from "../data/Entities/ListPrices";
import { IListPricesRepository } from "../data/Interfaces/IListPricesRepository";
import { ListPricesRepository } from "../data/Repositories/ListPricesRepository";
import { useFinanceContext } from "./useFinancesContext";

const repo:IListPricesRepository = ListPricesRepository;

export const useListPrices = () => {

    const {appListPrices, setAppListPrices, errors, setErrors, isSuccess, setIsSuccess} = useFinanceContext();
    return{
        appListPrices,
        appError: errors,
        appIsSuccess: isSuccess,
        handleChange (newValue: File | null) {
            setAppListPrices((formy) => ({
                ...formy,
                FileInput: newValue
            }) as ListPrices);
        },
        async postAsync(newListPrice: ListPrices){
            try{
                const handle = await repo.CreateAsync(newListPrice);
                setErrors(handle.detail as ListPriceErrorResult[]);
                setIsSuccess(handle.success);
                return handle.message;
            }
            catch(e){
                setIsSuccess(true);
                console.error(e);
                throw e;
            }
        }
    }
}