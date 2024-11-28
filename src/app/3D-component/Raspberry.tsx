import  { useEffect} from 'react';
import { useLoader } from '@react-three/fiber';
import { ObjectLoader } from 'three';

interface RaspberryProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}

function Raspberry({ position = [0, 0, 0], scale = [2.5, 2.5, 2.5]}: RaspberryProps) {
  const object = useLoader(ObjectLoader, '/models/raspberry.json');

  useEffect(() => {
    if (!object) {
      console.error('Failed to load object');
    }
  }, [object]);

  return (
    <primitive object={object} position={position} scale={scale}>
      <meshStandardMaterial color='#ff0000' />
    </primitive>
  );
}

export default Raspberry;