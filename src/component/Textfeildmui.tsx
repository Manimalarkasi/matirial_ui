import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function Textfeildmui() {
    const [value,setValue] = useState('')
  return (
    <div>
      <h3>text feild </h3>
      <Stack spacing={4} >
        <Stack direction='row' spacing={2}>
            <b>normal</b>
            <TextField label='name'  /><hr />
            <b>outlined</b>
            <TextField label='name' variant='outlined' /><hr />
            <b>filled</b>
            <TextField label='name' variant='filled' /><hr />
            <b>standard</b>
            <TextField label='name' variant='standard' /><hr />
        </Stack>
        <hr />

        <b>color size</b>
        <Stack direction='row' spacing={2}>
            <b>small sscondery</b>
            <TextField label='name' variant='outlined' size='small' color='secondary'/><hr />
            <b>medium info</b>
            <TextField label='name' variant='filled' size='medium' color='info' /><hr />
           </Stack>
           <hr />
           <Stack direction='row' spacing={2}>
           <b>required </b>
            <TextField label='name' required  />
            <b>helper text</b>
            <TextField label='password' type='password'  helperText='do not share your passwodr with anyone' required/>
            <b>disable </b>
            <TextField label='name' required disabled  />
            </Stack>
<hr />

           <Stack direction='row' spacing={2}>
           <b>input props --- read only </b>
            <TextField label='name' InputProps={{readOnly:true}}  required  />
            <b>input addorment start</b>
            <TextField label='amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }} />
            <b>input addorment end</b>
            <TextField label='weight' InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }} />
            <b>input addorment add icon</b>
                <TextField label='password' type='password' required helperText='do not share your passwodr with anyone'
               InputProps={{
                endAdornment:<InputAdornment position='end'><VisibilityOffIcon /></InputAdornment>
            }} />
           </Stack>
           <hr />
           
           <Stack direction='row' spacing={2}>
            <TextField label='input' required value={value} onChange={e=>setValue(e.target.value)} error={!value}
            helperText={!value ? 'required' : 'do not share your passwodr with anyone'}
            />
           </Stack>
           </Stack>
    </div>
  )
}

export default Textfeildmui
