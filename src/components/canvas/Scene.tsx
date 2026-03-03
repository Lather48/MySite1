"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useStore } from "@/store/useStore";

function InteractiveParticles() {
    const points = useRef<THREE.Points>(null);

    const particlesCount = 2000;

    const [positions, config] = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return [positions, { color: '#ff003c', size: 0.05 }];
    }, [particlesCount]);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            points.current.rotation.x = state.mouse.y * 0.2;
            points.current.rotation.y += state.mouse.x * 0.2;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={config.size}
                color={config.color}
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingObject() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { theme } = useStore();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, -2]}>
                <icosahedronGeometry args={[1.5, 0]} />
                <meshPhysicalMaterial
                    color="#111111"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    const { theme } = useStore();

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ff003c" />
                <InteractiveParticles />
                <FloatingObject />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
