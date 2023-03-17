import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockdata';
import './contact.css'
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';



export default function Contact() {

  const theme = useTheme();

  const colors = tokens(theme.palette.mode);


    const columns = [
        {field:'id',headerName:'ID',flex:0.5,headerClassName: "column-header" },
    {field:'name',headerName:'Name',flex:0.5,headerClassName: "column-header" },
    {field:'email',headerName:'Email',flex:0.5,headerClassName: "column-header" },
    {field:'age',headerName:'Age',flex:0.5,headerClassName: "column-header" },
    {field:'phone',headerName:'Phone',flex:0.5,headerClassName: "column-header" },
    {field:'city',headerName:'City',flex:0.5,headerClassName: "column-header" },
    {field:'zipCode',headerName:'ZipCode',flex:0.5,headerClassName: "column-header" },
    {field:'registrarId',headerName:'RegisterID',flex:0.5,headerClassName: "column-header" },
    {field:'address',headerName:'Address',flex:0.5,headerClassName: "column-header" },

    ]

  return (
    <div className='contact'>
            <h3 style={{margin:'1rem 2rem'}}>Contact List</h3>
      
        <DataGrid rows={mockDataContacts} columns={columns} slots={{
    toolbar: GridToolbar,
  }} 
        sx={{border:0,'& .column-header':{backgroundColor:colors.blueAccent[700]},'& .MuiDataGrid-footerContainer':{backgroundColor:colors.blueAccent[700]},'& .MuiDataGrid-toolbarContainer .MuiButton-text':{color:`${colors.gray[100]}!important`}}}/>
    </div>
  )
}
