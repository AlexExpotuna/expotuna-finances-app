import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { ListPriceErrorResult } from "../../../data/Entities/ListPriceErrorResult";
interface ErrorTableProps{
    errors:ListPriceErrorResult[];
    isSuccess: boolean;
}
export const ErrorTable = ({errors, isSuccess}: ErrorTableProps) => {
  return (
    !isSuccess &&<>
        <h2>Observations / errors</h2>
        <TableContainer component={Paper}>
            <Table aria-simple="error tables">
                <TableHead>
                    <TableRow>
                        <TableCell>Code Product</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {errors.map(err => (
                        <TableRow key={err.ProductCode}>
                            <TableCell>{err.ProductCode}</TableCell>
                            <TableCell>{err.Message}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </> 
    
    
  )
}
