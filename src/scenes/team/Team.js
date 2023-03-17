import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockdata';
import './team.css'
import AdminPenalSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';



export default function Team() {

  const theme = useTheme();

  const colors = tokens(theme.palette.mode);


    const columns = [
        {field:'id',headerName:'ID',flex:1,headerClassName: "column-header" },
    {field:'name',headerName:'Name',flex:1,headerClassName: "column-header" },
    {field:'email',headerName:'Email',flex:1,headerClassName: "column-header" },
    {field:'age',headerName:'Age',flex:1,headerClassName: "column-header" },
    {field:'phone',headerName:'Phone',flex:1,headerClassName: "column-header" },
    {field:'access',headerName:'Access',flex:1,headerClassName: "column-header" ,renderCell:({row:{access}})=>{
        return(
            <div style={{backgroundColor:access==='admin' ? colors.greenAccent[600] : colors.greenAccent[700],
            padding:'0.2rem 2rem',borderRadius:'5px',display:'flex',alignItems:'center',textTransform:'capitalize'}}>
                {access==='admin' && <AdminPenalSettingsOutlinedIcon/>}
                {access==='user' && <LockOpenOutlinedIcon/>}
                {access==='manager' && <SecurityOutlinedIcon/>}
                {access}

            </div>
        )
    }}]


  return (
    <div className='team'>
            <h3 style={{margin:'1rem'}}>Manage Team</h3>
        <DataGrid rows={mockDataTeam} columns={columns} slots={{
    toolbar: GridToolbar,
  }} 
  sx={{border:0,'& .column-header':{backgroundColor:colors.blueAccent[700]},
  '& .MuiDataGrid-toolbar': { backgroundColor: colors.greenAccent[500] },}}/>
    </div>
  )
}
