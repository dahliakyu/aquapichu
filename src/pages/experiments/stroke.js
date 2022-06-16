import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import React, { Suspense, useState, useEffect, useMemo } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { useTransition, useSpring, a } from '@react-spring/three'

const urls = ['vowel'].map(
    (name) => `/fontDesigns/${name}.svg`
  )

function Scene() {
    const { viewport } = useThree()
    const [page, setPage] = useState(0)
    const data = useLoader(SVGLoader, urls[page])
    const material = new THREE.MeshBasicMaterial( {
      color: '#21242d',
      side: THREE.DoubleSide,
      depthWrite: false
    } );
    const shapes = useMemo(() => data.paths.flatMap((g, index) => g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))), [
      data
    ])
    const geometry = new THREE.ShapeGeometry( shapes[0] );
    const mesh = new THREE.Mesh( geometry, material );
    const { color } = useSpring({ color: colors[page] })

    useEffect(() => void setInterval(() => setPage((i) => (i + 1) % urls.length), 3500), [])
    
    return (
        <>
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry />
            <a.meshPhongMaterial color={color.to((color) => console.log(color) || color)} depthTest={false} />
        </mesh>
        <group position={[viewport.width / 2, viewport.height / 4, page]}>
        </group>
        </>
    )
}
export default function App() {
    return (
      <Canvas flat linear camera={{ fov: 80, position: [0, 0, 2000], near: 0.1, far: 20000 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    )
  }
  
