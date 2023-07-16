import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CubeGlobalTex from "./CubeGlobalTex"


const RenderCubeGlobal = () => {
  return (
        <section className="container">
            <div className="canvas">
                <Canvas camera={{fov:13, position:[5,5,5]}}  >
                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={.9}/>
                    <directionalLight position={[3,2,1]}/>
                    <CubeGlobalTex/>
                </Canvas>
            </div>
        </section>  
  )
}

export default RenderCubeGlobal