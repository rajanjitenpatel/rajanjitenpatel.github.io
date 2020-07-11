/**
 *
 * WebGL With Three.js - Lesson 6 - loading models
 * http://www.script-tutorials.com/webgl-with-three-js-lesson-6/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Script Tutorials
 * http://www.script-tutorials.com/
 */
 var flag=0;
  var cube,cube1;
//var camera;
var lesson6 = {
  scene: null,
  camera: null,
  renderer: null,
  container: null,
  controls: null,
  clock: null,
  stats: null,

  init: function() { // Initialization

    
  var geometry = new THREE.CylinderGeometry( 2, 2, 5, 15 );
var material = new THREE.MeshBasicMaterial( {color: 0x3498DB} );
cube = new THREE.Mesh( geometry, material );
cube.position.x = -230;
  cube.position.y =2;
  cube.position.z = +120;
  /*cube1 = new THREE.Mesh( new THREE.CubeGeometry(10, 10, 20 ), new THREE.MeshNormalMaterial() );
  cube1.position.x = 0;
  cube1.position.y = 0;
  cube1.position.z = 0;
*/
//scene.add( sphere );

  //      cube = new THREE.Mesh( new THREE.CubeGeometry(10, 10, 10 ), new THREE.MeshNormalMaterial() )

        //cube = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10), "plaster.png");


    // create main scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);


    var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight;

    // prepare camera
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 2000;
    this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    //this.scene.add(this.camera);
      cube.add( this.camera );
      this.camera.position.set( -280, 50, 0 );
      this.camera.lookAt( new THREE.Vector3( 0, 00, 00 ) );
      //this.camera.position.set(0,100,200);
      //this.camera.lookAt(new THREE.Vector3(0,0,0));



    // prepare renderer
    this.renderer = new THREE.WebGLRenderer({ antialias:true });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.setClearColor(this.scene.fog.color);
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMapSoft = true;

    // prepare container
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.container.appendChild(this.renderer.domElement);

    // events
    THREEx.WindowResize(this.renderer,this.camera);

    // prepare controls (OrbitControls)
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0, 0, 0);
    this.controls.maxDistance = 2000;

    // prepare clock
    this.clock = new THREE.Clock();

    // prepare stats
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '50px';
    this.stats.domElement.style.bottom = '50px';
    this.stats.domElement.style.zIndex = 1;
    this.container.appendChild( this.stats.domElement );

    // add ambient lighting
    var ambientLight = new THREE.AmbientLight(0x222222);
    this.scene.add(ambientLight);

    // directional lighting
    var dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(1, 1, 1).normalize();
    this.scene.add(dLight);

    var dLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight1.position.set(0, 0, -1).normalize();
    this.scene.add(dLight1);

    var dLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    dLight2.position.set(1, 0, 0).normalize();
    this.scene.add(dLight2);

    var dLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
    dLight3.position.set(-1, 0, 0).normalize();
    this.scene.add(dLight3);
    // load a model
    this.loadModel();





        this.scene.add(cube1);

	this.scene.add( cube );
    var BIGIN=-10000, END=10000, WIDTH=END-BIGIN;
    
    var plane_geometry = new THREE.PlaneGeometry(WIDTH,WIDTH);
    var plane_material = new THREE.MeshLambertMaterial({color:0x663300, shading: THREE.FlatShading, overdraw: 0.5, side: THREE.DoubleSide});
    var plane = new THREE.Mesh(plane_geometry, plane_material);
    plane.rotation.x = 3.14159265 / 2;
    plane.position.y = -1;
    this.scene.add(plane);


    var camera=this.camera,delta=5;

    console.log(delta);
    document.addEventListener('keydown',onDocumentKeyDown,false);
                function onDocumentKeyDown(event)
                {

                if(!event)
                    event= window.event;
                event = event || window.event;
                var keycode = event.keyCode;
                console.log(keycode);
                switch(keycode){
                case 40 : //left arrow ????
                {
                  //sleep(200);
                   cube.position.x = cube.position.x - delta;
                   console.log(cube.position.x+"\n");
                  //camera.translateZ(cube.position.z+20 );
                  camera.postion.y=cube.position.y;
                  camera.postion.z=cube.position.z;
                  camera.position.x=cube.position.x+40;
                  camera.updateProjectionMatrix ();

                     break;
                }
                case 37 : // up arrow ????
                //sleep(200);
                {
                  cube.position.z = cube.position.z - delta;
                  console.log(cube.position.z+"\n");
                  //camera.translateZ(cube.position.z+20 );
                  camera.postion.y=cube.position.y;
                  camera.postion.x=cube.position.x;
                  camera.position.z=cube.position.z+40;
                  camera.updateProjectionMatrix ();

                //camera.lookAt(new THREE.Vector3(cube.position.x,cube.position.y,cube.position.z));
                  break;
                }
                case 38: // right arrow ????
                {
                   cube.position.x = cube.position.x + delta;
                   console.log(cube.position.x+"\n");
                  //camera.translateZ(cube.position.z+20 );
                  camera.postion.y=cube.position.y;
                  camera.postion.z=cube.position.z;
                  camera.position.x=cube.position.x-40;
                  camera.updateProjectionMatrix ();
                  break;
                }
                case 39: //down arrow????
                {
                      cube.position.z = cube.position.z + delta;
                      console.log(cube.position.z+"\n");
                  //camera.translateZ(cube.position.z+20 );
                  camera.postion.y=cube.position.y;
                  camera.postion.x=cube.position.x;
                  camera.position.z=cube.position.z-40;
                  camera.updateProjectionMatrix ();
                      break;
                }
          }
          //document.addEventListener('keyup',onDocumentKeyUp,false);

    }
    function onDocumentKeyUp(event){
             document.removeEventListener('keydown',onDocumentKeyDown,false);
             }

  },
  loadModel: function() {

    // prepare loader and load the model
    var oLoader = new THREE.ColladaLoader();
    oLoader.load('models/mlc.dae', function(collada) {

      var object = collada.scene;
      var skin = collada.skins[0];

      object.rotation.x = -Math.PI / 2;
      object.rotation.z = Math.PI / 2;
      object.position.x = -1*50;
      object.position.y = 0;
      object.position.z = 0;
      object.scale.set(0.025, 0.025, 0.025);
      object.updateMatrix();
      lesson6.scene.add(object);
       document.getElementById("load").style.display="none";
    }); 
  }
};

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}

// Update controls and stats
function update() {
  lesson6.controls.update(lesson6.clock.getDelta());
  lesson6.stats.update();
}

// Render the scene
function render() {

  if (lesson6.renderer) {
    lesson6.renderer.render(lesson6.scene, lesson6.camera);
  }
}
 function onDocumentKeyDown(event){
                var delta = 200;
                event = event || window.event;
                var keycode = event.keyCode;
                console.log(keycode);
                switch(keycode){
                case 37 : //left arrow ????
                camera.position.x = camera.position.x - delta;
                break;
                case 38 : // up arrow ????
                camera.position.z = camera.position.z - delta;
                break;
                case 39 : // right arrow ????
                camera.position.x = camera.position.x + delta;
                break;
                case 40 : //down arrow????
                camera.position.z = camera.position.z + delta;
                break;
          }
          document.addEventListener('keyup',onDocumentKeyUp,false);
    }
    function onDocumentKeyUp(event){
             document.removeEventListener('keydown',onDocumentKeyDown,false);
             }

// Initialize lesson on page load
function initializeLesson() {
  lesson6.init();
  animate();

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function cC()
{
         cube.position.z=200;
         cube.position.x=-100;
         cube.position.y=0;

}
function cM()
{
         cube.position.z=200;
         cube.position.x=-100;
         cube.position.y=0;

}
function cD()
{
         cube.position.z=200;
         cube.position.x=-100;
         cube.position.y=0;

}
if (window.addEventListener)
  window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
  window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
