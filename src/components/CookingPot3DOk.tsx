import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function PotModel() {
	const gltf = useGLTF("/models/CookingPot3DOk.glb");
	const ref = useRef<Group>(null);

	// Rotation
	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta * 0.8; // Rotation toupie verticale
		}
	});

	return <primitive ref={ref} object={gltf.scene} scale={0.9} />;
}

export default function CookingPot3D() {
	return (
		<div style={{ width: "180px", height: "180px", margin: "0 auto" }}>
			<Canvas camera={{ position: [0, 1.5, 1.5] }}>
				<ambientLight intensity={1} />
				<directionalLight position={[3, 5, 3]} intensity={1.2} />
				<PotModel />
			</Canvas>
		</div>
	);
}
