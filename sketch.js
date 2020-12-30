const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var drops = [];
var maxDrops = 100;

var t1, t2, t3, t4;
var man1, man2, man3, man4, man5, man6, man7, man8;

function preload() {
    /*
    t1 = loadImage("thunderbolt/1.png");
    t2 = loadImage("thunderbolt/2.png");
    t3 = loadImage("thunderbolt/3.png");
    t4 = loadImage("thunderbolt/4.png");

    man1 = loadImage("Walking Frame/walking_1.png");
    man2 = loadImage("Walking Frame/walking_2.png");
    man3 = loadImage("Walking Frame/walking_3.png");
    man4 = loadImage("Walking Frame/walking_4.png");
    man5 = loadImage("Walking Frame/walking_5.png");
    man6 = loadImage("Walking Frame/walking_6.png");
    man7 = loadImage("Walking Frame/walking_7.png");
    man8 = loadImage("Walking Frame/walking_8.png");
    */
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){ 
        drops.push(new Drop(random(0,400), random(0,400))); 
    }
}

}

function draw(){
    background(0);

    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].update();
    }

    drawSprite()
}
