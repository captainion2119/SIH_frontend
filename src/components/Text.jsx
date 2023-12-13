import React from 'react'
import { TextField ,Grid} from '@mui/material'

function Text({textData , setTextData}) {
    // console.log("text")
  const handleChange = (event) => {
    setTextData(event.target.value);
    // console.log(textData);
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
  // console.log(textData)
}

export default Text