import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface SquareBottomProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function SquareBottom({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: SquareBottomProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/squarebottom.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default SquareBottom;