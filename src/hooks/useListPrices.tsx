import { ListPrices } from "../data/Entities/ListPrices";
import { IListPricesRepository } from "../data/Interfaces/IListPricesRepository";
import { ListPricesRepository } from "../data/Repositories/ListPricesRepository";
import { useFinanceContext } from "./useFinancesContext";

const repo:IListPricesRepository = ListPricesRepository;

export const useListPrices = () => {

    const {appListPrices, setAppListPrices} = useFinanceContext();
    return{
        appListPrices,
        handleChange (newValue: File | null) {
            setAppListPrices((formy) => ({
                ...formy,
                FileInput: newValue
            }) as ListPrices);
        },
        async postAsync(newListPrice: ListPrices){
            try{
                const handle = await repo.CreateAsync(newListPrice);
                return handle.message;
            }
            catch(e){
                console.error(e);
                throw e;
                // Promise.reject(e);
            }
        }
    }
}