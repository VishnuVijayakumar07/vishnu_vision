import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, Center, Float, OrbitControls } from "@react-three/drei";
import { Robot } from "../assets/Robot";
import Loader from "./../Loader";

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center"
        >
            <div className="relative z-10 w-full p-8 md:p-12 lg:p-24 flex flex-col justify-center pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 border-b-2 border-white/20 pb-4 pointer-events-auto w-fit">
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr_4fr] gap-8 md:gap-12 max-w-[100rem] mx-auto w-full items-center">
                    <div className="pointer-events-auto bg-black/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                        <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                            I am a passionate <span className="text-amber-400 font-bold italic">creative developer</span> specializing in building premium, immersive digital experiences.
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                            My work blends technical precision with artistic vision, creating 3D environments and
                            highly interactive interfaces that captivate users.
                        </p>
                    </div>

                    <div className="pointer-events-auto h-[500px] md:h-[700px] w-full relative">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 50 }}>
                            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                            <ambientLight intensity={1.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                            <pointLight position={[-10, -10, -10]} intensity={1} />
                            <Suspense fallback={null}>
                                <Environment preset="city" />
                            </Suspense>
                            <OrbitControls enableZoom={false} enablePan={false} makeDefault autoRotate autoRotateSpeed={0.5} />
                            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                                <Suspense fallback={<Loader />}>
                                    <group position={[0, -0.5, 0]}>
                                        <Center top>
                                            <Robot scale={0.7} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                        </Center>
                                    </group>
                                </Suspense>
                            </Float>
                        </Canvas>
                    </div>

                    <div className="pointer-events-auto flex flex-col gap-4 w-full">
                        <div className="p-4 bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-all hover:border-amber-400/30 group">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">My Vision</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">To push the boundaries of the web through 3D storytelling and minimal design.</p>
                        </div>
                        <div className="p-4 bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-all hover:border-amber-400/30 group">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">My Approach</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">Clean code, high-contrast aesthetics, and user-centric architecture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
