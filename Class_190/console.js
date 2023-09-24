AFRAME.registerComponent("boxes", {
   
    init: function () {
      for (var i = 0; i < 20; i++) {
        var box = document.createElement("a-entity");
        box.setAttribute("id", "box" + i); 
  
        posX = Math.random()*200 -100;
        posY = 1.5;
        posZ =Math.random()*200 -100;
  
        position = { x: posX, y: posY, z: posZ };           
        box.setAttribute("position", position);
  
        box.setAttribute("geometry", {
          primitive: "box",
         
        });
  
        box.setAttribute("material", {
          src: "./scene.gltf",
          repeat: "20 20 20",
        });
  
       
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(box);
      }
    },
  });