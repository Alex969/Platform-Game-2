/*

The Game Project

Week 2 part b

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var tree1, tree2, tree3;

var mountain;

var cloud1, cloud2, cloud3;

var houseX;


function setup() 
{
    createCanvas(1024, 576);
    floorPos_y = height*3/4; //NB. we are now using a variable for the floor position
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
     
    tree1= {pos_x: 200, height: 100}
    tree2= {pos_x: 300, height: 200}
    tree3= {pos_x: 800, height: 400}
    
    cloud1= {pos_x: 100, height: 200}
    cloud2= {pos_x: 500, height: 100}
    cloud3= {pos_x: 1000, height: 100}
    
    moutain= {pos_x: 300, height: 400}
    houseX = random(200, width - 200)
}

function draw() 
{    
    
    background(255,218,185); //fill the sky blue
    
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y);
    //2. a mountain in the distance
    //... add your code here
   

    
    //1. a cloud in the sky 
    //... add your code here
    
    
    //3. a tree 
    //... add your code here
    
    //4. a house
    //... add your code here
    
    noStroke();
    fill(176,224,230);
    rect(houseX,floorPos_y - 140,150,140);
    fill(230,230,250);
    fill(105,105,105);
    strokeWeight(3);
    stroke(135,206,235);
    ellipse(houseX+75,floorPos_y-110,30,30);
    
    fill(230,230,250);
    rect(houseX+50,floorPos_y-90,50,88);
    
    

    
    
    //5. another foreground item of your choice
    //... add your code here
   
    noStroke();
    
     //Front facing character
    fill(0);
    rect(gameChar_x - 15,gameChar_y - 42,30,20);
    fill(255,0,0);
    rect(gameChar_x - 10.5,gameChar_y - 22,20.5,15);
    fill(255);
    ellipse(gameChar_x - 7,gameChar_y - 12,1,3);
    fill(210,180,140);
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



}

function mousePressed()
{

    
}

