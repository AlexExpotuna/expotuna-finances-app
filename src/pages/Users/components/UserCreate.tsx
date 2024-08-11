import { Box, Button, Paper, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";

export const UserCreate = () => {
  const {openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog} = useDialog();
  const handleClick = () => {
    handleOpenCreateDialog();
  }
  return (
    <>
        <Paper sx={{marginBottom: 6}}>
            <Button onClick={handleClick}>
                Crear usuario
            </Button>
        </Paper>
        <FormDialog title={"Crear usuario"} handleSubmit={function (): void {
              throw new Error("Function not implemented.");
          } } openDialog={openCreateDialog} handleDialog={handleCloseCreateDialog}>
            <TextField
                variant="filled"
                fullWidth
                name='Username'
                label="Usuario"
                placeholder='ej: usuario123'
                required
                    // value={form.Username}
                    // onChange={e => {
                    //     setForm(e.target.value, "Username")
                    // }}
                />
        </FormDialog>
    </>
  );
};
