var treeImg,tree;
var cheeseImg,cheese,cheeseGroup;
var monkey,monkeyImg;
var invisibileBlockGroup,invisibleBlock;
var gameState ="play"

function preload(){
treeImg = loadImage ("tree.jpeg/IMAGES!")
cheeseImg = loadImage ("cheese.jpeg/IMAGES!")
monkeyImage = loadImage ("monkey.jpeg/IMAGES!")
cheeseGroup = new Group()
invisibileBlockGroup = new Group()
}

function setup() {
 createCanvas(windowWidth, windowHeight)
 tree = createSprite(windowWidth,windowHeight)
 tree.addImage("tree",treeImg)
 tree.velocity = 1
 monkey = createSprite(200,200,50,50)
 monkey.addImage(monkeyImg)
 monkey.scale = 0.3
}

function draw() {
 background(200);
 if(gameState === "play"){

    if(tree.y > 400){
        tree.y = 300
    }
    if(keyDown("left_arrow")){
        monkey.x = monkey.x -3
    }
    if(keyDown("right_arrow")){
        monkey.x = monkey.x +3
    }
    if(keyDown("space")){
        monkey.velocityY = -5
    }
    mpnkey.velocotyY = monkey.velocityY + 0.8
    if(cheeseGroup.isTouching(monkey)){
        monkey.velocityY = 0
    }
    if(invisibleBlockGroup.isTuchoing(monkey)|| monkey.y >600){
        monkey.destroy()
        gameState = "end"
    }
    drawSprites()
 }
 else if (gameState === "end"){
   stroke("yellow")
   fill("red")
   textSize(30)
   text("GAME OVER",230,250)
 }
}
function spawnDoors(){
if(frameCount%200 === 0){
    cheese = createSprite(200,10)
    invisibleBlock = cresteSprite(200,15)
    cheese.addImage(cheeseImg)
    cheese.x = Math.round(random(120,400))
    invisibleBlock.width = cheese.width
    cheese.velocityY = 1
    invisibleBlock.velocity = 1
    monkey.depth = cheese.depth
    monkey.depth = monkey.depth +1
    cheese.lifetime = 800 
    cheeseGroup.add(cheese)
    invisibleBlockGroup.add(invisibleBlock)
}
}