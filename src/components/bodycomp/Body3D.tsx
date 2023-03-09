import React, { Component } from 'react';
import * as ATHREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
/* eslint-disable-next-line */
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

class Body3D extends Component {
  graphRef = React.createRef<HTMLDivElement>();

  controls: any;

  scene: any;

  camera: any;

  renderer: any;

  model: any;

  requestID: number;

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    //this.graphRef = React.createRef();
    this.requestID = 0;
  }

  componentDidMount() {
    this.sceneSetup();
    this.addLights();
    this.loadTheModel();
    this.startAnimationLoop();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
  // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
  sceneSetup() {
    // get container dimensions and use them for scene sizing
    const width = (this.graphRef.current as any).getBoundingClientRect().width;
    const height = (this.graphRef.current as any).getBoundingClientRect().height;
    this.scene = new ATHREE.Scene();
    this.scene.background = new ATHREE.Color(0xffffff);
    this.camera = new ATHREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.z = 300; // is used here to set some distance from a cube that is located at z = 0
    // OrbitControls allow a camera to orbit around the object
    // https://ATHREEjs.org/docs/#examples/controls/OrbitControls
    this.controls = new OrbitControls(this.camera, this.graphRef.current);
    this.controls.zoomSpeed = 0.12;
    this.renderer = new ATHREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    (this.graphRef.current as any).appendChild(this.renderer.domElement); // mount using React ref
  }

  // Code below is taken from ATHREE.js OBJ Loader example
  // https://ATHREEjs.org/docs/#examples/en/loaders/OBJLoader
  loadTheModel = () => {
    // instantiate a loader
    const loader = new OBJLoader();

    // load a resource
    loader.load(
      // resource URL relative to the /public/index.html of the app
      '/body.obj',
      // called when resource is loaded
      (object) => {
        object.children.forEach((child) => {
          const mesh = child;
          // we need to build a new BufferGeometry with the vertex data from the obj mesh returned from
          // loader.parse to workaround an issue where vertex normals could not be calculated.
          let newGeom = new ATHREE.BufferGeometry();
          newGeom.setAttribute('position', mesh.geometry.getAttribute('position'));
          // call mergeVertices so that the buffer geometry becomes indexed (the generated obj file does
          // not inlcude indicies)
          newGeom = BufferGeometryUtils.mergeVertices(newGeom);
          // vertex normals are not included in the generated obj file, so they must be computed
          newGeom.computeVertexNormals();
          mesh.geometry = newGeom;
          // set the material
          const phongMaterial = new ATHREE.MeshPhongMaterial({
            color: 0xa9a9a9
          });
          const color2 = new ATHREE.Color(0xa9a9a9);
          phongMaterial.shininess = 10;
          mesh.material = phongMaterial;
          mesh.material.color = color2;
          mesh.scale.set(200, 200, 200);

          this.scene.add(mesh);
          mesh.position.set(0, -150, 0);
        });
      },
      // called when loading is in progresses
      // (xhr) => {
      //   const loadingPercentage = Math.ceil((xhr.loaded / xhr.total) * 100);
      //   console.log(loadingPercentage + '% loaded');
      // },
      // called when loading has errors
      // (error) => {
      //   console.log('An error happened:' + error);
      // }
    );
  };

  // adding some lights to the scene
  addLights = () => {
    const lights: Array<ATHREE.PointLight> = [];

    // set color and intensity of lights
    lights[0] = new ATHREE.PointLight(0xffffff, 0.5, 0);
    lights[1] = new ATHREE.PointLight(0xffffff, 1.5, 0);
    lights[2] = new ATHREE.PointLight(0xffffff, 1.5, 0);
    lights[3] = new ATHREE.PointLight(0xffffff, 0.5, 0);

    // place some lights around the scene for best looks and feel
    lights[0].position.set(0, 6000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(-1000, -2000, -1000);
    lights[3].position.set(0, -6000, 0);

    //this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    //  this.scene.add(lights[3]);
  };

  startAnimationLoop = () => {
    // slowly rotate an object
    if (this.model) this.model.rotation.z += 0.005;
    this.renderer.render(this.scene, this.camera);

    // The window.requestAnimationFrame() method tells the browser that you wish to perform
    // an animation and requests that the browser call a specified function
    // to update an animation before the next repaint
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  updateSize = () => {
    if (this.graphRef !== undefined && this.graphRef.current !== undefined) {
      this.setState({
        width: (this.graphRef.current as any).getBoundingClientRect().width,
        height: (this.graphRef.current as any).getBoundingClientRect().height
      });
    }
  };

  handleWindowResize = () => {
    this.updateSize();
    const width = (this.graphRef.current as any).getBoundingClientRect().width;
    const height = (this.graphRef.current as any).getBoundingClientRect().height;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  render() {
    const style = {
      width: '100%',
      height: window.innerWidth <= 640 ? '80vw' : '35vw',
      borderRadius: '10px'
    };
    return <div style={style} ref={this.graphRef}></div>;
  }
}

export default Body3D;
