import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts, mockDataInvoices } from '../../data/mockdata';
import './invoice.css'
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';



export default function Invoice() {

  const theme = useTheme();

  const colors = tokens(theme.palette.mode);


    const columns = [
        {field:'id',headerName:'ID',flex:1,headerClassName: "column-header" },
    {field:'name',headerName:'Name',flex:1,headerClassName: "column-header" },
    {field:'email',headerName:'Email',flex:1,headerClassName: "column-header" },
    {field:'phone',headerName:'Phone',flex:1,headerClassName: "column-header" },
    {field:'cost',headerName:'Cost',flex:1,headerClassName: "column-header",renderCell:(params)=>{
        <div>
            ${params.row.cost}
        </div>
    } },
    {field:'date',headerName:'Date',flex:1,headerClassName: "column-header" },
    ]

  return (
    <div className='invoice'>
            <h3 style={{margin:'1rem 2rem'}}>Invoice Balance</h3>

        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} slots={{
    toolbar: GridToolbar,
  }} 
        sx={{border:0,'& .column-header':{backgroundColor:colors.blueAccent[700]},'& .MuiDataGrid-footerContainer':{backgroundColor:colors.blueAccent[700]},
        '& .MuiDataGrid-toolbarContainer .MuiButton-text':{color:`${colors.gray[100]}!important`},
        '& .MuiCheckbox-root':{color:colors.greenAccent[200]}}}/>
    </div>
  )
}
