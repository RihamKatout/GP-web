import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface LineProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Line({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: LineProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/line.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} roughness={0.01} metalness={0.3} />
    </mesh>
  );
}

export default Line;