const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    sunrise1 = loadImage("image/sunrise1.png");
    sunrise2 = loadImage("image/sunrise2.png");
    sunrise3 = loadImage("image/sunrise3.png");
    sunrise4 = loadImage("image/sunrise4.png");
    sunrise5 = loadImage("image/sunrise5.png");
    sunrise6 = loadImage("image/sunrise6.png");
    sunset7 = loadImage("image/sunset7.png");
    sunset8 = loadImage("image/sunset8.png");
    sunset9 = loadImage("image/sunset9.png");
    sunset10 = loadImage("image/sunset10.png");
    sunset11 = loadImage("image/sunset11.png");
    sunset12 = loadImage("image/sunset12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.silce(11,13);
    console.log(hour);


    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if (hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if (hour>=23 && hour===0){
        bg = "sunset10.png";
    }else if (hour===0 && hour<=03){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}
