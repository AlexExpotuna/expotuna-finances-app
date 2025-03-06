import { Box, ButtonGroup, IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { User } from "../../../data/Entities/User";
import { useDialog } from "../../../hooks/useDialog";
import { useUser } from "../../../hooks/useUser";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const columns = (
  handleClickEdit: (id: number) => void,
  handleClickDelete: (id: number) => void
) => {
  return [
    { field: "identificacion", headerName: "Identificacion", width: 150 },
    { field: "nombres", headerName: "Nombres", width: 200 },
    { field: "apellidos", headerName: "Apellidos", width: 200 },
    { field: "correo", headerName: "Correo", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <IconButton
            onClick={() => {
              handleClickEdit(Number(params["id"]));
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              handleClickDelete(Number(params["id"]));
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];
};
interface UserTableViewProps {
  rows: User[];
  setStateForm: (value: User) => void;
}
export const UserTableView = ({ rows, setStateForm }: UserTableViewProps) => {
  const { handleOpenEditDialog, handleOpenDeleteDialog } = useDialog();
  const { deleteAsync, getAsync } = useUser();

  const handleClickEdit = (id: number) => {
    getAsync(id)
      .then((res) => {
        setStateForm(res);
        handleOpenEditDialog();
      })
      .catch((err) => {
        inventoryAlert(err.response?.data?.message ?? "Unexpected error");
      });
  };

  const handleClickDelete = (id: number) => {
    deleteAsync(id)
      .then((res) => {
        inventoryAlert(res);
      })
      .catch((err) => {
        inventoryAlert(err.response?.data?.message ?? "Unexpected error");
      })
      .finally(() => {
        handleOpenDeleteDialog();
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        overflow: 'auto'
      }}
    >
      <div style={{ flex: 1, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns(handleClickEdit, handleClickDelete)}
          autoHeight 
          sx={{ minHeight: 300 }} 
        />
      </div>
    </Box>
  );
};
