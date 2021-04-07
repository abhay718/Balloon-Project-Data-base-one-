var ball,database,position;
var ha;
var bg;
var bbg;



function preload(){
bg  = loadImage("../pro-C35 images/back.png/");
ha = loadAnimation("../pro-C35 images/b1.png/","../pro-C35 images/b2.png/","../pro-C35 images/b3.png/");
}


function setup(){

    database = firebase.database(); // adding the variable database to the firebase...we have to tell the value of the var "database" now

    createCanvas(1500,950);

  // bbg.addImage("bcg",bg)

  bbg = createSprite(1500/2,475,100,1);
  
  bbg.addImage("bcg",bg);
  bbg.scale = 0.6;


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";  
    ball.addAnimation("hahah",ha);     
    var ballposition = database.ref('balloon/position');     //refering to the location of the database value (ball position...)
    ballposition.on("value",readPosition,showError);     //

}

function draw(){



    background("#c68767");
    
  //  bbg.addImage("bcg",bg)


    
    if(position !== undefined){

    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);

    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
        ball.scale = ball.scale-0.01;
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
        ball.scale = ball.scale+0.01;
    }



    drawSprites();
}
}

function changePosition(x,y){

    database.ref('balloon/position').set({             //??
        'x': position.x+x,                        //??
        'y': position.y+y                                 //??
    })
    


    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}


function readPosition(data){         //

        position = data.val();       //
        
        ball.x = position.x;           //
        ball.y = position.y;           //                                        

}







function showError(){

}