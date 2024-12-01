import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface DripCreamProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function DripCream({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: DripCreamProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/dripcream.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default DripCream;