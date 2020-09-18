var narrator;
var egglocater,elpart1,elpart2,elpart3;
var part1,part2,part3,part4,part5,part5,part6,part7,part8,part9,part10,part11;
var number=0;
var textdeliver;
var eggimg,elpart1img,elpart2img,elpart3img,egglocaterimg;
var button;

function preload(){
  eggimg=loadImage("Sprites/the-golden-goose.png");
  elpart1img=loadImage("Sprites/motor.png");
  elpart2img=loadImage("Sprites/system.png");
  elpart3img=loadImage("Sprites/chip.png");
  egglocaterimg=loadImage("Sprites/gps.png")
}
function setup(){
 createCanvas(windowWidth, windowHeight);
 narrator=createSprite(windowWidth-300,windowHeight-300,10,10);

}

function draw(){
 background("aqua");
 parttext();
 textSize(24);
 text(textdeliver,100,windowHeight/2);
 if(mousePressedOver(egglocater)&&number==0)
  {
    elpart1.visible=false;
    number++;
    console.log(number);
  }
  if(number==1)
  {
    console.log("destroy")
    elpart1.visible=false;
    elpart1.destroy();
    elpart2.destroy();
    elpart3.destroy();
    egglocater.destroy();
  }
 drawSprites();
}
function parttext()
{
  if(number==0)
  {
    console.log("num=0")
    textdeliver="Build the Golden Egg locater Before going on the expediture";
    //var randwidth=random(100,windowWidth-100);
    //var randheight=random(100,windowHeight-100)
    elpart1=createSprite(windowWidth-700,windowHeight-300,50,50);
    elpart1.addImage(elpart1img);
    elpart1.scale=0.3
    elpart2=createSprite(windowWidth-500,windowHeight/8,50,50);
    elpart2.addImage(elpart2img);
    elpart2.scale=0.3
    elpart3=createSprite(windowWidth/8,windowHeight/5,50,50);
    elpart3.addImage(elpart3img);
    elpart3.scale=0.3
    if(mousePressedOver(elpart1)||mousePressedOver(elpart2)||mousePressedOver(elpart3))
    {
      egglocater=createSprite(windowWidth/2,windowHeight/2,50,50);
      egglocater.addImage(egglocaterimg);
      egglocater.scale=0.3;
      textdeliver="You have made the egg locater Press the Egg locater to move Forward";
    }
  }
  if(number==1)
  {
      textdeliver="You're now on a expedition to find the Golden Egg which contains a special formula which contains Powers to rule the entire Earth"
      egglocater.destroy();
      
  }
  if(number==2)
  {
    egglocater=createSprite(100/2,100/2,50,50);
    egglocater.addImage(egglocaterimg);
    egglocater.scale=0.3;
    button=createButton()  
  }
  if(number==3)
  {
      
  }
  if(number==4)
  {
      
  }
  if(number==5)
  {
      
  }if(number==6)
  {
      
  }
  if(number==7)
  {
      
  }
  if(number==8)
  {
      
  }
  if(number==9)
  {
      
  }
  if(number==10)
  {
      
  }
  if(number==11)
  {
      
  }

}