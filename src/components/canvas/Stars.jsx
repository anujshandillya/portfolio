import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useSelector } from "react-redux";

const Stars = (props) => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 2 })
  );

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.x = a/2;
    ref.current.rotation.y = a/2;
    ref.current.rotation.z = 0;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={bool?"#9bbdd7":"black"}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
