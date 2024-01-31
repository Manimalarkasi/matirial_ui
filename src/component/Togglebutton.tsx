import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { log } from 'console';
function Togglebuttonmui() {
  const [format,setFormat] = useState<string[]>([])
  console.log({format});
  const handleformatchange = (_event:React.MouseEvent<HTMLElement>,updateFormat:string[]) =>{
    setFormat(updateFormat)
  }
  return (
    <div>
      <h3>Toggle button - mui</h3>
      <Stack>
        <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handleformatchange} size='small' color='info' orientation='vertical' exclusive>
            <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /> </ToggleButton>
            <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon /> </ToggleButton>
         </ToggleButtonGroup>
      </Stack>
      {format}
    </div>
  )
}

export default Togglebuttonmui
