import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface CherryProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Cherry({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: CherryProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/cherry.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color}  roughness={0.2}/>
    </mesh>
  );
}

export default Cherry;