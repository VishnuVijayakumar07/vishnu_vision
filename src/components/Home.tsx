import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Loader from "./../Loader";
import GreetBg from "../assets/Models/GreetBg";

const Home = () => {

  return (
    <div className='w-full h-full relative bg-black'>
      <Canvas >
        <PerspectiveCamera
          makeDefault
          fov={10}
          near={1.0}
          far={2000}
          position={[0, 0, 50]}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          minDistance={0.3}
          maxDistance={200}
          target={[0, 0, 0]}
        />

        <Suspense fallback={<Loader />}>

          <directionalLight position={[1, 1, 1]} intensity={2} />

          <ambientLight intensity={0.5} />

          <pointLight position={[10, 15, 10]} intensity={2} />

          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <GreetBg
            scale={[15, 10, 15]}
            position={[0, 0, 0]}
            rotation={[0, 0.1, 0]}
          />



          <hemisphereLight args={["#ffffff", "#000000", 1]} />
        </Suspense>
      </Canvas>

    </div>
  );
};

export default Home;
