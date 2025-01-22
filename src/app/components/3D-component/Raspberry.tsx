import { useLoader } from '@react-three/fiber';
import { BufferGeometryLoader } from 'three';

interface RaspberryProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

function Raspberry({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5], rotation = [0, 0, 0], color = '#ffff' }: RaspberryProps) {
  const geometry = useLoader(BufferGeometryLoader, './models/raspberry.json');

  return (
    <mesh geometry={geometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} roughness={0.3}/>
    </mesh>
  );
}

export default Raspberry;