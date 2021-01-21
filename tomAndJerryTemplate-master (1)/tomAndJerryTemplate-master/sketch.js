var cat,catimage
var jerry,jerryimage
var gardenimage
var catcollechionimage
var jerrcollechionimage
var jerryOne
var catimageone
function preload() {
    //load the images here
catimageone=loadImage("images/tomOne.png")
catimage=loadAnimation("images/tomTwo.png","images/tomThree.png")
gardenimage=loadImage("images/garden.png")
jerryimage=loadImage("images/jerryOne.png")
catcollechionimage=loadImage("images/tomFour.png")
jerrcollechionimage=loadImage("images/jerryFour.png")

    jerryone=loadAnimation("images/jerryTwo.png","images/jerryThree.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addImage("catMoive",catimageone)

cat.scale=0.1

jerry=createSprite(200,600)
jerry.addImage("jerryStill",jerryimage)
jerry.scale=0.1
gardenimage.scale=2
}

function draw() {

    background(gardenimage);
    //Write condition here to evalute if tom and jerry collide
 fill("black")
text(mouseX+","+mouseY,mouseX,mouseY)
if(cat.x-jerry.x<(cat.width-jerry.width)/2){
    cat.velocityX=0
    cat.addAnimation("catcollechionimage",catcollechionimage);
    cat.x=300
cat.changeAnimation("catcollechionimage")
jerry.addAnimation("jerrcollechionimage",jerrcollechionimage);
jerry.changeAnimation("jerrcollechionimage");
}
    drawSprites();
}


function keyPressed(){



  //For moving and changing animation write code here
  
if(keyCode===LEFT_ARROW){
   
    cat.velocityX=-5
    
 
    cat.addAnimation("catRunning",catimage);
    cat.changeAnimation("catRunning");
    jerry.addAnimation("jerryoneRunning",jerryone);
   jerry.frameDelay=25
    jerry.changeAnimation("jerryoneRunning");
 
    
}
}


