import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { a } from '@react-spring/three';

const GreetBgmodelPath = '/3D/Background/scene.gltf';

type GreetBgModelProps = {
    position?: [number, number, number];
    scale?: [number, number, number];
    rotation?: [number, number, number];
};

function GreetBg(props: GreetBgModelProps) {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(GreetBgmodelPath);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <a.group
            ref={groupRef}
            scale={props.scale }
            position={props.position}
            rotation={props.rotation}
        >
            <Center>
                <primitive object={scene} />
            </Center>
        </a.group>
    )
}

useGLTF.preload(GreetBgmodelPath);

export default GreetBg