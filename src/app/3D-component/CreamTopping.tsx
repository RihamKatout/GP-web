
import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface CreamToppingProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  color?:string;
}

function CreamTopping({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5] , color='#ffff'}: CreamToppingProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/cream.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default CreamTopping;