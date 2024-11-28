import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

interface ModelProps {
  scale?: number;
}

function Model(props: ModelProps) {
  const { scene } = useGLTF("strawberr.glb");
  return <primitive object={scene} {...props} />;
}

function Apptry() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 1, 2], fov: 50 }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.1} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default Apptry;