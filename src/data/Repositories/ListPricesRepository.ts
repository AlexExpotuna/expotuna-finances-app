import { ListPricesDTO } from "../DTOs/ListPrices";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { ListPrices } from "../Entities/ListPrices";
import { Post } from "../HttpClient/ClientMethods";
import { IListPricesRepository } from "../Interfaces/IListPricesRepository";

export const ListPricesRepository: IListPricesRepository = {
    CreateAsync: async function (newRecord: ListPrices): Promise<MessageInfoDTO> {
        try{
            const dto = newRecord as ListPricesDTO;
            const newForm = new FormData();
            newForm.append("FileInput", dto.FileInput);
            const res = await Post<MessageInfoDTO>("ListPrices", newForm);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}