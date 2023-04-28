import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

const Box: React.FC<React.ComponentPropsWithoutRef<"mesh">> = (props) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "WoodFloor051_1K_Color.jpg",
      "WoodFloor051_1K_Displacement.jpg",
      "WoodFloor051_1K_NormalGL.jpg",
      "WoodFloor051_1K_Roughness.jpg",
      "WoodFloor051_1K_AmbientOcclusion.jpg",
    ]
  );

  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};
export default Box;
