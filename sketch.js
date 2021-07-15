var path , pathImage

var Jaxon , Jaxon_running

var boundary,b2



function preload(){

  //pre-load images

  Jaxon_running=loadAnimation("Runner-1.png","Runner-2.png")

  pathImage=loadImage("path.png")

}

function setup(){

  createCanvas(400,400)
  ;
  //creating path

  path=createSprite(200,200)

  path.addImage("path",pathImage)

  path.velocityY=4

  path.scale=1.2
    
  //creating jaxon 

  Jaxon=createSprite(180,300,20,20)

  Jaxon.addAnimation("running",Jaxon_running)

  Jaxon.scale=0.1

  //creating boundary

  boundary=createSprite(0,0,100,800)
  
  boundary.visible=false

  // creating second boundary

  b2=createSprite(410,0,100,800)

  b2.visible=false
}

function draw() {

  background(0);

  //giving jaxon control 

Jaxon.x=mouseX



//making background infinite

if (path.y > 400){
  path.y=height/2
}

drawSprites()

//making it collide with boundarys

Jaxon.collide(boundary)

Jaxon.collide(b2)

}
