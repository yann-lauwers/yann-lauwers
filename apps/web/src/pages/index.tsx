import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";

import Box from "~/components/three/box";
import Draggable from "~/components/three/draggable";
import LightBulb from "~/components/three/light/LightBulb";
import Controls from "~/components/three/orbit-controls";
import Sphere from "~/components/three/sphere";
import Floor from "~/components/three/floor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yann Lauwers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="z-0 h-full">
        <div className="h-screen">
          <Canvas
            shadows={true}
            camera={{
              position: [-6, 7, 7],
            }}
          >
            <ambientLight color="white" intensity={0.2} />
            <LightBulb position={[0, 5, 0]} />
            <Draggable>
              <Suspense fallback={null}>
                <Box position={[-2, 1, 0]} />
              </Suspense>
            </Draggable>
            <Draggable>
              <Suspense fallback={null}>
                <Sphere position={[5, 3, 0]} />
              </Suspense>
            </Draggable>
            <Controls.Orbit enableZoom={false} />
            <Floor position={[0, -1, 0]} />
          </Canvas>
        </div>
      </main>
    </>
  );
}
