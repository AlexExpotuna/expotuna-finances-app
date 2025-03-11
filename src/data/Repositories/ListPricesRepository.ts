import { ListPriceErrorResultDTO } from "../DTOs/ListPriceErrorResultDTO";
import { ListPricesDTO } from "../DTOs/ListPrices";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { ListPrices } from "../Entities/ListPrices";
import { ListPriceErrorResult } from "../Entities/ListPriceErrorResult";
import { Post } from "../HttpClient/ClientMethods";
import { IListPricesRepository } from "../Interfaces/IListPricesRepository";

export const ListPricesRepository: IListPricesRepository = {
    CreateAsync: async function (newRecord: ListPrices): Promise<MessageInfoDTO> {
        try{
            const dto = newRecord as ListPricesDTO;
            const newForm = new FormData();
            newForm.append("FileInput", dto.FileInput);
            const contentType = {"Content-Type": "multipart/form-data"};
            const res = await Post<MessageInfoDTO>("Ci/list-price", newForm, 
                false,
                contentType,
            );
            const mapper = res.detail as ListPriceErrorResultDTO[]; 
            res.detail =  mapper.map(dt => ({
                Message: dt.message,
                ProductCode: dt.productCode
            } as ListPriceErrorResult))
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}