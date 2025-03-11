export type ExcelDownloadApp = {
    columns:ExcelColumnApp[];
    filename: string;
    data: any[];
}
export type ExcelColumnApp = {
    title:string;
    dataKey:string;
}