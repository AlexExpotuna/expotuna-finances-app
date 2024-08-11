import { Button, ButtonGroup } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'; 
import { User } from '../../../data/Entities/User';
import { useDialog } from '../../../hooks/useDialog';
const columns = (handleClickEdit: (id:number) => void, handleClickDelete: (id:number) => void) =>{
    return [
        { field: 'identificacion', headerName: 'Identificacion', width: 150 },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
        { field: 'correo', headerName: 'Correo', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },        
        { field: 'actions', headerName: 'Acciones', width: 250, 
            renderCell: (params: GridRenderCellParams) =>(<ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            >
                <Button onClick={() => {
                    handleClickEdit(Number(params["id"]));
                }}>Edit</Button>
                <Button onClick={() => {
                    handleClickDelete(Number(params["id"]));
                    }}>Delete</Button>
            </ButtonGroup> ) },
      ];
} 
interface UserTableViewProps {
    rows: User[];
}
export const UserTableView = ({rows}: UserTableViewProps) => {
    const {handleOpenEditDialog, handleOpenDeleteDialog} = useDialog();
    const handleClickEdit = (id:number) => {
        handleOpenEditDialog();
    }
    const handleClickDelete = (id:number) => {
        handleOpenDeleteDialog();
      }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns(handleClickEdit, handleClickDelete)} />
    </div>
  )
}
