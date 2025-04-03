"use client";
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarBackground = (props: any) => {
    const ref = useRef<THREE.Group>(null);
    const [sphere, setSphere] = useState<Float32Array | null>(null);

    useEffect(() => {
        setSphere(new Float32Array(random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })));
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    if (!sphere) return null; // Avoid rendering before state is set

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color={"#fff"} size={0.002} sizeAttenuation depthWrite={false} />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }} className="w-full h-full">
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
