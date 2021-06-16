const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinko = [];
function preload()
{

}



function setup(){
    createCanvas(800,700);
    engine = Engine.create()
    world = engine.world; 


ground = new Ground(400.690,800,20)



for( var i = 0; i<=width; i = i+80 ){
    divisons.push(new Divisons(i,height-divisonsHeight/2,10,divisonsHeight));
}

for(var j=75; j<=width; j =j+50){
    plinko.push(new Plinko(j,75))
}

for(var j=75; j<=width-10; j =j+50){
    plinko.push(new Plinko(j,175))
}

for(var j=75; j<=width; j =j+50){
    plinko.push(new Plinko(j,275))
}

for(var j=75; j<=width-10; j =j+50){
    plinko.push(new Plinko(j,375))
}


Engine.run(engine);

}

function draw(){
rectMode(CENTER)
background(0);

drawSprite();



for(var n = 0; n<divisons.length; n++ ){
    divisons[n].display();
}

if(frameCount %60 === 0){
    particles.push(new particles(random(width/2-30,width/2+30),10,10));
}

for(var h = 0; n<particles.length; h++ ){
    particles[h].display();
}

for(var j = 0; n<plinko.length; j++ ){
    plinko[j].display();
}


ground.display();



}
