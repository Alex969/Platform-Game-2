/*

The Game Project

Week 2 - part a

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used lots of shape functions to create a detailed
game character

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;


function setup()
{
    createCanvas(400, 600);
}

function draw()
{
    background(255);

    //Standing, facing frontwards
    stroke(100);
    noFill();
    rect(20, 60, 50, 80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    //Add your code here ...
    gameChar_x =45;
    gameChar_y = 137;
    fill(0);
    rect(gameChar_x - 15,gameChar_y - 42,30,20);
    fill(255,0,0);
    rect(gameChar_x - 10.5,gameChar_y - 22,20.5,15);
    fill(255);
    ellipse(gameChar_x - 7,gameChar_y - 12,1,3);
    stroke(255);
    line(gameChar_x - 11.5,gameChar_y - 37,33.5,115);
    line(gameChar_x + 10,gameChar_y - 37,55,115);
    line(gameChar_x - 1,gameChar_y - 22,44,130),
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x,gameChar_y - 47,25,30);
    ellipse(gameChar_x - 13.5,gameChar_y - 19,4,4)
    ellipse(gameChar_x + 13,gameChar_y - 19,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 60,9,4);
    fill(255);
    ellipse(gameChar_x,gameChar_y - 37,15,9)
    
    
    


    //Jumping facing forwards
    stroke(100);
    noFill();
    rect(220, 60, 50, 80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 220, 160);

    //Add your code here ...
    gameChar_x=245;
    gameChar_y=137;
    fill(0);
    rect(gameChar_x - 15,gameChar_y - 42,30,20);
    fill(255,0,0);
    rect(gameChar_x - 10.5,gameChar_y - 22,10.5,15);
    rect(gameChar_x - 0.5,gameChar_y - 27,10.5,15);
    fill(255);
    ellipse(gameChar_x - 7,gameChar_y - 12,1,3);
    stroke(255);
    line(gameChar_x - 11.5,gameChar_y - 37,233.5,115);
    line(gameChar_x + 10,gameChar_y - 37,255,115);
    line(gameChar_x - 1,gameChar_y - 22,244,130),
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x,gameChar_y - 47,25,30);
    ellipse(gameChar_x + 13.5,gameChar_y - 19,4,4)
    ellipse(gameChar_x - 13,gameChar_y - 19,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(gameChar_x + 10,182,193);
    ellipse(gameChar_x,gameChar_y - 60,9,4);
    fill(255);
    ellipse(gameChar_x,gameChar_y-37,15,9)


    //Walking, turned left
    stroke(100);
    noFill();
    rect(20, 260, 50, 80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    //Add your code here ...
    gameChar_x = 45;
    gameChar_y = 337;
    fill(0);
    rect(gameChar_x - 6,gameChar_y - 42,14,20);
    fill(255,0,0);
    rect(gameChar_x - 4.5,gameChar_y - 22,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x - 1,gameChar_y - 47,20,25);
    ellipse(gameChar_x - 10,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 38,10,6)
    
    


    //Walking, turned right
    stroke(100);
    noFill();
    rect(220, 260, 50, 80);
    noStroke();
    fill(0);
    text("4. Walking right", 220, 360);

    //Add your code here ...
    gameChar_x = 245;
    gameChar_y = 337;
     fill(0);
    rect(gameChar_x - 5,gameChar_y - 42,14,20);
    fill(255,0,0);
    rect(gameChar_x - 2.5,gameChar_y - 22,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x + 2,gameChar_y - 47,20,25);
    ellipse(gameChar_x + 13,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x + 2,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 38,10,6)


    //Jumping right
    stroke(100);
    noFill();
    rect(20, 460, 50, 80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    //Add your code here ...
    gameChar_x =45;
    gameChar_y =537;
      fill(0);
    rect(gameChar_x - 5,gameChar_y - 42,14,20);
    fill(139,0,0);
    rect(gameChar_x - 2.5,gameChar_y - 22,10.5,15);
    fill(255,0,0);
    quad(gameChar_x - 2.5,gameChar_y - 22,gameChar_x + 8,gameChar_y - 22,gameChar_x +8,gameChar_y - 17,gameChar_x + 10,gameChar_y - 7);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x + 2,gameChar_y - 47,20,25);
    ellipse(gameChar_x + 13,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x + 2,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 38,10,6)


    //Jumping to the left
    stroke(100);
    noFill();
    rect(220, 460, 50, 80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 220, 560);

    //Add your code here ...
    gameChar_x=245;
    gameChar_y=537;
    fill(0);
    rect(gameChar_x - 7,gameChar_y - 42,14,20);
    fill(139,0,0);
    rect(gameChar_x - 4.5,gameChar_y - 22,9,15);
    fill(255,0,0);
    quad(gameChar_x +7.5,gameChar_y - 22,gameChar_x,515,gameChar_x - 11,gameChar_y - 12,gameChar_x - 6,gameChar_y - 7);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x - 1,gameChar_y - 47,20,25);
    ellipse(gameChar_x - 10,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 38,10,6);

}
