import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Outlines } from '@react-three/drei';

const ScanningBox = () => {
    const boxRef = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        boxRef.current.position.y = Math.sin(t / 2) * 0.1;
    });

    return (
        <group ref={boxRef}>
            <mesh>
                <boxGeometry args={[4, 4, 4]} />
                <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
            </mesh>
            <mesh>
                <boxGeometry args={[4.05, 4.05, 4.05]} />
                <Outlines thickness={2} color="#ffffff" />
                <meshBasicMaterial color="transparent" transparent opacity={0} />
            </mesh>
        </group>
    );
};

const Product = () => {
    return (
        <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#333333" roughness={0.1} metalness={0.9} envMapIntensity={2} />
            </mesh>
        </Float>
    );
};

const LaserScanner = () => {
    const laserRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        laserRef.current.position.y = Math.sin(t * 2) * 1.9;
    });

    return (
        <mesh ref={laserRef}>
            <boxGeometry args={[4.2, 0.05, 4.2]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} transparent opacity={0.6} />
        </mesh>
    );
};

export default function ScannerModel() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Canvas camera={{ position: [6, 4, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 20, 10]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" />
                <Environment preset="city" />
                
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                <ScanningBox />
                <Product />
                <LaserScanner />
            </Canvas>
        </div>
    );
}
