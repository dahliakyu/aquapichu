import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {RenderBirds} from '../RenderBirds';


function valuetext(value){
  return `${value}°C`;
}


export default function DiscreteSlider() {
  const [value, setvalue] = useState(100);

  const handleValue = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>     
      <Box>
        <Slider
          aria-label="Temperature"
          defaultValue={10}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          onChange={handleValue}
        />
      </Box>
    {value}
    <RenderBirds number = {value} />
    </div>
  );
}