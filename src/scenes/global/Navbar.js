import {Box,IconButton,useTheme} from '@mui/material'
import { ColorModeContext,tokens } from '../../theme'
import React,{useContext} from 'react'
import {InputBase} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'



export default function Navbar() {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
        <Box display='flex'>
            <InputBase sx={{ml:2,flex:1}} placeholder="search" />
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </Box>
        {/* right icons  */}
        <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode==='dark' ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>}
        </IconButton>
        <IconButton>
            <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon/>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        </Box>
    </Box>
  )
}
