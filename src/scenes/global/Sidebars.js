import React,{ useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "./sidebars.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { display } from "@mui/system";


const Sidebars = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  const { collapseSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  // console.log(collapsed)




  return (
    <div className="sidebars" >
      <Sidebar className="sidebar" backgroundColor={colors.primary[400]} >
          
          {collapsed ?
          <div style={{alignItems:'center',placeItems:'center',padding:'1.2rem'}}>
            <MenuOutlinedIcon onClick={()=>collapseSidebar()} className='toggle-btn'/>
          </div>
          :
          <div className="sidebar_header">
            <h2>Admin</h2>
            <MenuOutlinedIcon onClick={()=>collapseSidebar()} className='toggle-btn'/>
        </div>
        }
        <Menu menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? 'black' : colors.gray[100],
            backgroundColor: active ? '#eecef9' : undefined,
            ":hover":{
              backgroundColor:colors.gray[900]
            }
          };
      },
    }}>
          <MenuItem  component={<Link to={'/'}/>} icon={<HomeOutlinedIcon/>}>{collapsed ? undefined : "Dashboard" } </MenuItem>
          <h4 className="category">Data</h4>
          <MenuItem component={<Link to={'/team'}/>} icon={<PeopleOutlinedIcon/>}>{collapsed ? undefined : "Manage Team"}</MenuItem>
          <MenuItem component={<Link to={'/contact'}/>} icon={<ContactsOutlinedIcon/>}>{collapsed ? undefined :"Contact Information"}</MenuItem>
          <MenuItem component={<Link to='/invoice'/>} icon={<ReceiptOutlinedIcon/>}>{collapsed ? undefined : "Invoice Balance"}</MenuItem>
          <h4 className="category">Pages</h4>
          <MenuItem component={<Link to='/form'/>} icon={<PersonOutlinedIcon/>}>{collapsed ? undefined : "Profile Form"}</MenuItem>
          <MenuItem component={<Link to='/calendar'/>} icon={<CalendarTodayOutlinedIcon/>}>{collapsed ? undefined : "Calender"}</MenuItem>
          <MenuItem component={<Link to='/faq'/>} icon={<HelpOutlineOutlinedIcon/>}>{collapsed ? undefined : "FAQ Page"}</MenuItem>
          <h4 className="category">Charts</h4>
          <MenuItem component={<Link to='/bar'/>} icon={<BarChartOutlinedIcon/>}>{collapsed ? undefined : "Bar Chart"}</MenuItem>
          <MenuItem component={<Link to='/pie'/>} icon={<PieChartOutlineOutlinedIcon/>}>{collapsed ? undefined : "Pie Chart"}</MenuItem>
          <MenuItem component={<Link to='/line'/>} icon={<TimelineOutlinedIcon/>}>{collapsed ? undefined : "Line Chart"}</MenuItem>
          <MenuItem component={<Link to='/geography'/>} icon={<MapOutlinedIcon/>}>{collapsed ? undefined : "Geography"}</MenuItem>
        </Menu>
      </Sidebar>
      <main>
      </main>
    </div>
  );
  };
  
export default Sidebars;