import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface CandyProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Candy({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: CandyProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/candy.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Candy;