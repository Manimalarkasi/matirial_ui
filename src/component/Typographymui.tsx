import { Typography } from '@mui/material';
import { log } from 'console'
import React from 'react'

function Typographymui() {
    console.log('nnn');
    
  return (
    <div>
      hii
      <b>mui - typograpy</b>
      <Typography variant='h1'>typograpy heading variant h1</Typography>
      <Typography variant='h2'>typograpy heading variant h2</Typography>
      <Typography variant='h3'>typograpy heading variant h3</Typography>
      <Typography variant='h4'>typograpy heading variant h4</Typography>
      <Typography variant='h5'>typograpy heading variant h5</Typography>
      <Typography variant='h6'>typograpy heading variant h6</Typography>
<hr />
      <Typography variant='subtitle1'>typograpy subtitle variant 1</Typography>
      <Typography variant='subtitle2'>typograpy subtitle variant 2</Typography>
<hr />
      <Typography variant='body1'>typograpy body variant 1
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, possimus deleniti iure architecto, earum, incidunt quia exercitationem doloremque autem ullam ipsam facilis repellendus aut eaque quis tenetur nemo accusantium cupiditate magni perferendis? Autem perferendis quam architecto fugiat facere voluptates consectetur distinctio quis, eligendi reprehenderit sapiente debitis asperiores, dicta nam! Eum.
      </Typography>
      <Typography variant='body2'>typograpy body variant 2
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis commodi similique labore dolore tenetur ducimus incidunt optio quis, cupiditate fugiat molestias explicabo accusamus blanditiis quos sed aliquid nemo ex iste vitae consequatur sunt recusandae aut laboriosam laudantium. Tempora, corporis unde! Enim dolores unde odio dolore fugiat temporibus inventore numquam nulla.
      </Typography>
<hr />

      <Typography variant='h2' component='h1' gutterBottom>typograpy heading variant h2</Typography>
      <Typography variant='h3' component='h1' gutterBottom>typograpy heading variant h3</Typography>
      <Typography variant='h4' component='h2' gutterBottom>typograpy heading variant h4</Typography>
      <Typography variant='h5' component='h3' gutterBottom>typograpy heading variant h5</Typography>
    </div>
  )
}

export default Typographymui
