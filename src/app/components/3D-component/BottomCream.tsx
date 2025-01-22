import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface BottomCreamProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function BottomCream({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: BottomCreamProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/bottomcream.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default BottomCream;