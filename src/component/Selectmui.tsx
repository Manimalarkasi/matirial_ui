import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function Selectmui() {
    const [country,setCountry] = useState<string[]>([])

     const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setCountry (typeof value ==='string' ?  value.split(',') : value)
     }
     console.log({country});
     
  return (
    <div>
      <h3>select component</h3>
      <b>select multiple value</b>

      <Box width='300px'>
        <TextField label='seiect country' select value={country} onChange={handlechange} fullWidth SelectProps={{multiple:true}} size='medium' color='secondary' helperText='pls select yr country'>
            <MenuItem value='IN'>india</MenuItem>
            <MenuItem value='AS'>astralia</MenuItem>
            <MenuItem value='UK'>britten</MenuItem>
            <MenuItem value='US'>america</MenuItem>
            <MenuItem value='EN'>england</MenuItem>
        </TextField>
      </Box>
    </div>
  )
}

export default Selectmui


export function Selectmui1() {
    const [country,setCountry] = useState('')

     const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       
        setCountry ( e.target.value as string)
     }
     console.log({country});
     
  return (
    <div>
      <h3>select component</h3>
      <b>select single value</b>
      <Box width='300px'>
        <TextField label='seiect country' select value={country} onChange={handlechange} fullWidth >
            <MenuItem value='IN'>india</MenuItem>
            <MenuItem value='AS'>astralia</MenuItem>
            <MenuItem value='UK'>britten</MenuItem>
            <MenuItem value='US'>america</MenuItem>
            <MenuItem value='EN'>england</MenuItem>
        </TextField>
      </Box>
    </div>
  )
}
