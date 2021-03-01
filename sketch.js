var canvas
var gameState=0
var playerCount
var database
var form ,game ,player
function setup(){
  canvas=createCanvas(400 ,400);
database=firebase.database()
game=new GAME()
game.getState()
game.start()

}
function draw(){

}