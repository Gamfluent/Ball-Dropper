class Plane {
    constructor(x,y,width,height, a) {
      var options = {
          isStatic: true,
          angle: a,
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      strokeWeight(2);
      stroke("purple");
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };