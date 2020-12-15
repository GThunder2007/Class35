var ball;
var db;
var pos;
var pos2;

function setup(){
    createCanvas(500,500);
    db = firebase.database()
    pos = db.ref("box/position")
    pos.on("value", read, showErr)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
  db.ref("box/position").set({
      x: pos2.x + x,
      y: pos2.y + y
  })
}

function read(data){
  pos2 = data.val()
  ball.x = pos2.x
  ball.y = pos2.y
}

function showErr(){
    console.log("There is an ERROR!")
}