import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';
import * as THREE from 'three';

interface CreamProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Cream({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: CreamProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/cream2.json');
 /// const Texture = useLoader(THREE.TextureLoader, '/textuers/Piping.json');//Piping.json
  const material = useLoader(THREE.MaterialLoader, '/textuers/Piping.json');//Piping.json


  // Ensure texture wraps correctly
  // Texture.wrapS = THREE.RepeatWrapping;
  // Texture.wrapT = THREE.RepeatWrapping;
  // Texture.repeat.set(2, 2); 

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      {/* <meshStandardMaterial color={color} map={Texture} roughness={0.5} /> */}
      <primitive object={material} attach="material" color={color}  />
    </mesh>
  );
}


export default Cream;