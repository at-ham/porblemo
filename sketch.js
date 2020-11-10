//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogI,foodI, sdsafs;

function preload(){
dogI = loadImage("images/dogImg.png")
sdsafs = loadImage("images/dogImg1.png")




}

function setup() {
  createCanvas(500, 500);
  background(46, 139, 87);
  database=firebase.database()
dog = createSprite(250,250,20,20);
dog.addImage(dogI)
foodStock=database.ref('food')
foodStock.on("value",readStock)
dog.scale=0.2



}


function draw() {  
  
  drawSprites();
  //add styles here\
if (keyWentDown(UP_ARROW)){
  clear ();
  background(46, 139, 87);
  writeStock(foodS);
dog.addImage(sdsafs);


}
if (keyWentUp(UP_ARROW)){
  clear ();
  background(46, 139, 87);
  writeStock(foodS);
dog.addImage(dogI);


}





}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1;
}


database.ref('/').update({
  food:x
})
}


