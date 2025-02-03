import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';
import * as THREE from 'three';
interface BottomCreamProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function BottomCream({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: BottomCreamProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/try.json');
  const Texture = useLoader(THREE.TextureLoader, '/textuers/cream2.jpeg');//cream2.jpeg
  const material = useLoader(THREE.MaterialLoader, '/textuers/Piping.json');//Piping_normal.json

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} map={Texture}/>
    </mesh>
  );
}

export default BottomCream;