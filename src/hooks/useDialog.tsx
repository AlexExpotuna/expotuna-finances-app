import { useFinanceContext } from './useFinancesContext';
export const useDialog = () => {
  const { openEditDialog, setOpenEditDialog, openCreateDialog, 
    setOpenCreateDialog, openDeleteDialog, setOpenDeleteDialog,
  } = useFinanceContext();
  return {
    openEditDialog,
    openDeleteDialog,
    openCreateDialog,
    handleOpenCreateDialog(){
        setOpenCreateDialog(true);
      },
    handleCloseCreateDialog(){
        setOpenCreateDialog(false);
      },

    handleOpenEditDialog(){
        setOpenEditDialog(true);
      },
    handleCloseEditDialog(){
        setOpenEditDialog(false);
      },
    handleOpenDeleteDialog(){
        setOpenDeleteDialog(true);
      },
    handleCloseDeleteDialog(){
        setOpenDeleteDialog(false);
      },
  }
}
