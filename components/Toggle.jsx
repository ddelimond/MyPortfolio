import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react';

const Toggle = () => {
  return (
    <div>
          <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />}/>
          </FormGroup> 
    </div>
  )
}

export default Toggle
