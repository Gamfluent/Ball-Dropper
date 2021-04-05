const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes = [];
var grounds = [];
var planes = [];
var circles = [];

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
   // Engine.run(engine);

    //grounds.push(new Ground(600, height, 1200, 20)); 
    grounds.push(new Ground(width, 400, 20, 800));
    grounds.push(new Ground(0, 400, 20, 800));  

    planes.push(new Plane(200, 200, 800, 20, 0.2));
    planes.push(new Plane(1000, 350,800, 20, -0.2));

}

function mouseDragged(){
    circles.push(new Circle(mouseX, mouseY, random(5, 20)));
}

//function mouseDragged(){
   //boxes.push(new Box(mouseX, mouseY, random(5, 20), random(5, 20)));
//}

function draw(){
    background("black");
    Engine.update(engine);

    //Draw boxes
    for(var i = 0; i < boxes.length; i++){
        boxes[i].display();
    }

    //Draw planes
    for (var i = 0; i < planes.length; i++){
        planes[i].display();
    }
    
    //Draw Ground
    for (var i = 0; i < grounds.length; i++){
        grounds[i].display();
    }

    //Draw Circles
    for (var i = 0; i < circles.length; i++){
        circles[i].display();

        if(circles[1].isOffScreen()){
            circles[i].removeFromWorld();
            circles.splice(i, 1);
            i--;
        }
    }

}