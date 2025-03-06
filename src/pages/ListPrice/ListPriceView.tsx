import { MuiFileInput } from 'mui-file-input';
import AttachFileIcon from '@mui/icons-material/AttachFile'

import { useState } from 'react';
import { Button, Grid } from '@mui/material';
interface FormElements extends HTMLFormControlsCollection {
  listPriceInput: HTMLInputElement
}
interface ListPriceFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export const ListPriceView = () => {
    const [value, setValue] = useState<File | null>(null)
    const handleChange = (newValue: File | null) => {
        setValue(newValue)
    }
    function handleSubmit(event: React.FormEvent<ListPriceFormElement>) {
        event.preventDefault()
        setValue(null);
        // event.currentTarget.reset();
      }
    return (
        <>
            <h1>List Price view</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <MuiFileInput 
                        value={value} 
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
                        <Button type="submit" variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
