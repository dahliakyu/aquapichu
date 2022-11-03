import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import RenderBirds from '../RenderBirds'


function valuetext(value){
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
  );
}