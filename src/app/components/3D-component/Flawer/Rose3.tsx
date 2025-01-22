import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface Rose3Props {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Rose3({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: Rose3Props) {
  const geometry = useLoader(BufferGeometryLoader, './models/flawer/rose3.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color}  roughness={0.2}/>
    </mesh>
  );
}

export default Rose3;