//Create variables here
var dog, happydog, database, foodS, foodStock;



function preload(){
  //load images here
  dog=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  doggo=createSprite(250,250,20,20);
    doggo.addImage(dog);
    

  database = firebase.database();

  foodStock=database.ref('Food');
    foodStock.on("value", readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    doggo.addImage(happydog);
  }

  drawSprites();
  
  //add styles here
  textSize(20);
    fill(255);
      stroke(1);
        text("Presss UP_ARROW key o Feed Doggo Milk!", 80,300);

}

//Function to read values frm DB
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}






