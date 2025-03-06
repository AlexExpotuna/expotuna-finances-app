import { MuiFileInput } from 'mui-file-input';
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Button, Grid } from '@mui/material';
import { useListPrices } from '../../hooks/useListPrices';
import { useState } from 'react';
import { AxiosError } from 'axios';
interface FormElements extends HTMLFormControlsCollection {
  listPriceInput: HTMLInputElement 
}
interface ListPriceFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export const ListPriceView = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const {appListPrices, handleChange, postAsync} = useListPrices();
    function handleSubmit(event: React.FormEvent<ListPriceFormElement>) {
        event.preventDefault();
        setIsDisabled(true);
        postAsync(appListPrices).then((res) => {
            alert(res);
        })
        .catch((e) => {
            const err: AxiosError = new AxiosError(e);
            alert(`${err.message}`)
        })
        .finally(() => {
            handleChange(null);
            setIsDisabled(false);
        });
      }
    return (
        <>
            <h1>List Price view</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <MuiFileInput 
                        required
                        value={appListPrices.FileInput} 
                        id= "listPriceInput"
                        label= "Lista de precio"
                        placeholder='Elija un archivo de excel'
                        InputProps={{
                            inputProps:{
                                accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            }, 
                            startAdornment: <AttachFileIcon/>,
                        }}
                        onChange={handleChange} />
                    </Grid>
                    <Grid item md={12}>
                        <Button disabled={isDisabled} type="submit" variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
