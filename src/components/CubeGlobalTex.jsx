import { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const CubeGlobalTex = () => {
    const textRef = useRef()
    useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.2))
  return (
    <mesh>
        <boxGeometry  />
        <meshPhongMaterial color="red">
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]}/> 
                <color attach="background" args={["pink"]}/>    
                <Text ref={textRef} fontSize={1} color="#555">
                    GlobalTex 
                </Text>
            </RenderTexture>
        </meshPhongMaterial>
    </mesh>
  )
}

export default CubeGlobalTex