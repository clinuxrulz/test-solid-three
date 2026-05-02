import type { Component } from 'solid-js';
import * as THREE from "three";

import { Canvas, createT } from "solid-three";

const T = createT(THREE);

const App: Component = () => {
  return (
    <div
      style={{
        "position": "absolute",
        "left": "0",
        "top": "0",
        "bottom": "0",
        "right": "0",
      }}
    >
      <Canvas
        ref={(ctx) => {
          queueMicrotask(() => {
            ctx.camera.lookAt(0, 0, 0);
          });
        }}
        scene={{ background: "#000000", }}
        camera={{ position: [ 5, 5, 5, ] }}
      >
        <T.Mesh>
          <T.MeshNormalMaterial/>
          <T.BoxGeometry
            args={[ 1, 1, 1, ]}
          />
        </T.Mesh>
      </Canvas>
    </div>
  );
};

export default App;
