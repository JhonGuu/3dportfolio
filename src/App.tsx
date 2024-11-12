
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Box, OrbitControls, PerspectiveCamera, Plane } from '@react-three/drei'
import { MathUtils, MeshStandardMaterial } from 'three'

function App() {

  return (
    
    <>  
    <div className='w-screen h-screen'>
      
        <Canvas >
          <ambientLight/>
          <OrbitControls/>
          <PerspectiveCamera makeDefault position={[3,3,5]} fov={70}/>

          {/*pared trasera */}
          <Box args={[0.1,3,0.04]} position={[-1,1.5,-3]}/>
          <Box args={[0.1,3,0.04]} position={[1.1,1.5,-3]}/>
          <Box args={[0.06,6,0.01]} position={[0,2.3,-3]} rotation={[0,0,1.57]}/>
          <Plane  args={[6,3]} position={[0,1.5,-3]} rotation={[0,0,0]}>
            <meshStandardMaterial color={"blue"}/>
          </Plane>

          {/*pared izquierda */}
          <Plane  args={[6,3]} position={[-3,1.5,0]} rotation={[0,Math.PI/2,0]}>
            <meshStandardMaterial color={"lightgray"}/>
          </Plane>

          {/*TV */}
          <Plane  args={[2.2,1]} position={[-2.95,2,-1.6]} rotation={[0,Math.PI/2,0]}>
            <meshStandardMaterial color={"white"}/>
          </Plane>

          {/*pared derecha */}
          
          {/*
          <Plane  args={[5,3]} position={[2.5,1.5,0]} rotation={[0,-Math.PI/2,0]}>
            <meshStandardMaterial color={"lightgray"}/>
          </Plane> 
          */}

          {/*suelo */}
          <Plane  args={[6,6]} position={[0,0,0]} rotation={[-Math.PI/2,0,0]}>
            <meshStandardMaterial color={"pink"}/>
          </Plane>

          <Box args={[2.5,0.5,4]} position={[1.5,0.26,-1]}/>
          <Box args={[4,0.5,1]} position={[-2.5,0.26,1]} rotation={[0,1.56,0]}  />
          <Box args={[0.5,1.3,0.5]} position={[-1,0.5,1]} />
        </Canvas>
    </div>
    </>
  )
}

export default App
