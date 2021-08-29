var astronaut;
var sleep,gym,bath,brush,drink,eat,BG;



function preload(){
  BG = loadImage("iss.png");
  sleep = loadImage("sleep.png");
 
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
 background
background=createSprite(width/2,200);
background.addImage(BG);



//creating boy running
astronaut = createSprite(width/2,height-50,50,200);
astronaut.addAnimation(sleep);
astronaut.scale=0.08;
  
  
}

function draw() {


  background(0);
  
  
    
   
  
  drawSprites();
  



  }

