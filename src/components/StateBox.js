import ProgressCircle from "./ProgressCircle";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";


export default function StateBox({title,subtitle,icon,progress,increase}) {
    const theme = useTheme()
    const colors  = tokens(theme.palette.mode)

    return (
    <div style={{width:'100%',margin:'1rem 8px',backgroundColor:colors.primary[400],padding:'0.8rem 2rem'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                {icon}
                <h4 style={{fontStyle:'italic',fontWeight:'bold',color:colors.gray[100],margin:'5px 0'}}>{title}</h4>
            <p style={{color:colors.greenAccent[500],display:"flex",textAlign:'center',margin:'0px',padding:'0px'}}>{subtitle}</p>
            </div>
            <div style={{margin:'0'}}>
                <ProgressCircle progress={progress}/>
                <h5 style={{fontStyle:'italic',fontWeight:'bold',color:colors.greenAccent[600]}}>{increase}</h5>
            </div>
        </div>
    </div>
  )
}
