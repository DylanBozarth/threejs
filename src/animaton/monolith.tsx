/* eslint-disable */
import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const geometry = new THREE.SphereGeometry(15, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sphere = new THREE.Mesh(geometry, material);
  const ref = useRef<THREE.Mesh>(null!)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (ref.current.rotation.x += 0.001))

  return (
    <mesh
      {...props}
      ref={ref}>
      <boxGeometry args={[1, 5, 1]} />
      <meshStandardMaterial color={'black'} />
    </mesh>
  )
}


export const Monolith = () => {
  return (
    <Canvas id='canvas' >
      <ambientLight intensity={1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Box position={[1, 1, 1]} />
    </Canvas>
  )
}
