import React from 'react'
import { useTheme } from '@emotion/react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'



export default function FAQ() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <div className='faq' style={{margin:'1rem'}}>
            <h3 style={{margin:'1rem 2rem'}}>FAQ</h3>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <h5 style={{color:colors.greenAccent[500]}}>
                An Importand Question
            </h5>
            </AccordionSummary>
            <AccordionDetails>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta optio tempore fuga? Voluptate dignissimos quas qui cum iure, magni inventore? Nemo possimus dolor, ratione vel officiis tenetur laudantium!</p>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <h5 style={{color:colors.greenAccent[500]}}>
                An Importand Question
            </h5>
            </AccordionSummary>
            <AccordionDetails>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta optio tempore fuga? Voluptate dignissimos quas qui cum iure, magni inventore? Nemo possimus dolor, ratione vel officiis tenetur laudantium!</p>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <h5 style={{color:colors.greenAccent[500]}}>
                An Importand Question
            </h5>
            </AccordionSummary>
            <AccordionDetails>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta optio tempore fuga? Voluptate dignissimos quas qui cum iure, magni inventore? Nemo possimus dolor, ratione vel officiis tenetur laudantium!</p>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <h5 style={{color:colors.greenAccent[500]}}>
                An Importand Question
            </h5>
            </AccordionSummary>
            <AccordionDetails>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta optio tempore fuga? Voluptate dignissimos quas qui cum iure, magni inventore? Nemo possimus dolor, ratione vel officiis tenetur laudantium!</p>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <h5 style={{color:colors.greenAccent[500]}}>
                An Importand Question
            </h5>
            </AccordionSummary>
            <AccordionDetails>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta optio tempore fuga? Voluptate dignissimos quas qui cum iure, magni inventore? Nemo possimus dolor, ratione vel officiis tenetur laudantium!</p>
            </AccordionDetails>
        </Accordion>

    </div>
  )
}
