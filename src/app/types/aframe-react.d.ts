declare module 'aframe-react';
// aframe-react.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      "a-scene": any;
      "a-assets": any;
      "a-box": any;
      "a-sphere": any;
      "a-cylinder": any;
      "a-plane": any;
      "a-sky": any;
      "a-light": any;
      "a-text": any;
      "a-image": any;
      "a-camera": any;
      "a-cursor": any;
      "a-entity": any;
      "a-sound":any;
    }
  }
  declare namespace AFRAME {
    interface Entity extends HTMLElement {
      object3D: THREE.Object3D;
      setAttribute(type: string, value: any): void;
      getAttribute(type: string): any;
    }
  }
  