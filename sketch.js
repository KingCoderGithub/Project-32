const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, tower;


var ballob, blowerob, blowermouthob;
var button;


function setup() {
  createCanvas(800,400);

  //ballob = createSprite();
  // blowerob = createSprite();
  // blowermouth = createSprite();
  

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow)

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}