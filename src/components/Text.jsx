import React from 'react'
import { TextField ,Grid} from '@mui/material'

function Text({textData , setTextData}) {
    console.log("text")
  const handleChange = (event) => {
    setTextData(event.target.value);
  };

  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <TextField 
              placeholder={'Enter Here'}
              value={textData}
              onChange={handleChange}
            />
          </Grid>
      </Grid>
    </>
  )
}

export default Text