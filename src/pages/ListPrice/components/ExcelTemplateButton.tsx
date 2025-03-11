import { Button } from '@mui/material'
import * as XLSX from 'xlsx';
import { saveAs } from "file-saver"
import { ExcelDownloadApp } from '../../../data/Entities/ExcelDownload';
import { columns, initialExcelTemplateData } from '../../../state/initialStates';
import DownloadIcon from '@mui/icons-material/Download';

export const ExcelDownload = ({data, columns, filename}:ExcelDownloadApp) => {
    // Convert the data to a format compatible with Excel
       const excelData = [
         columns.map((column) => column.title),
         ...data.map((item) => columns.map((column) => item[column.dataKey])),
       ];
     
       // Create the Excel file
       const worksheet = XLSX.utils.aoa_to_sheet(excelData);
       const workbook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
     
       // Download file
       const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
       const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
       saveAs(blob, `${filename}.xlsx`);
     };

export const ExcelTemplateButton = () => {
  return (
    <Button
    variant="contained"
    
    onClick={() => {
        ExcelDownload({data: initialExcelTemplateData, columns, filename: "PriceList"});
    }}
    startIcon={<DownloadIcon/>}
    >
    Excel Template
    </Button>
  )
}
