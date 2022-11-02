import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, extend, useThree} from '@react-three/fiber'
import CCapture from "ccapture.js";

const SETTINGS = {
  duration: 2,
}
const capturer = new CCapture({
  format: "gif",
  framerate: 25,
  verbose: true,
  // motionBlurFrames: 6
});



function Recorder() {
  let shouldRecord = false;
  let isRecording = false;
  let prevPlayhead = 0;
  document.onkeyup = function(e) {
    if (e.which == 82) { // press R to start recording 
      alert("recording now");
      shouldRecord = true;
    } 
  };
  
  useFrame((state) => {
    let currentPlayhead = state.clock.getElapsedTime()%SETTINGS.duration;

    if(isRecording && currentPlayhead<prevPlayhead){
      shouldRecord = false;
      isRecording = false;
      capturer.stop();
      capturer.save();
    }

    if(!isRecording && shouldRecord && currentPlayhead<prevPlayhead){
      isRecording = true;
      capturer.start();
    }

    if(isRecording){
      capturer.capture(state.gl.domElement)
    }

    prevPlayhead = currentPlayhead
  })
  return (
    <group dispose={null}>
    </group>
  )
}




function Box(props) {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
      <mesh 
        ref={ref} 
        {...props}
        >
        <boxBufferGeometry attach="geometry" args={[1,1,1]} />
        <meshBasicMaterial attach="material" color={'hotpink'} />
      </mesh>
    )
}

ReactDOM.render(
  <Canvas colorManagement>
    <Box />
    <Recorder />
  </Canvas>,
  document.getElementById('root')
)