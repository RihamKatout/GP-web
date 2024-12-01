import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface HeartCreamProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function HeartCream2({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: HeartCreamProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/heartcream2.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default HeartCream2;