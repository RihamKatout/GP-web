import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';
import * as THREE from 'three';
interface StarProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Star({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: StarProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/star.json');
  const Texture = useLoader(THREE.TextureLoader, '/textuers/cream.jpg');

   Texture.wrapS = THREE.RepeatWrapping;
    Texture.wrapT = THREE.RepeatWrapping;
    Texture.repeat.set(2, 2); 
  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} map={Texture}/>
    </mesh>
  );
}

export default Star;