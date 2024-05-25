const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
var a , b;
var dest;



function preload()
 {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    // add condition to check if any background image is there to add
if(backgroundImg)
 {
   background(backgroundImg);
   text(dest,80,50)
  if(a>=00 && a<12)
  {
    textSize(20)
     strokeWeight(10);
 text("Time : "+a+" : " +b+" AM",80,79)
  }
  else if(a>=12 && a <24)
  {
    textSize(20)
     strokeWeight(10);
     text("Time : "+a+" : " +b+" PM",80,79)
  }
 } 
    Engine.update(engine);
   // console.log(mouseX , mouseY)
   
    // write code to display time in correct format here
    

}

async function getBackgroundImg()
{

  // write code to fetch time from API
  var response= await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
   
    
  //change the data in JSON format
  var responseJson= await response.json()
  console.log("Time",responseJson)

  var place = responseJson.timezone
 dest = place;


  // write code slice the datetime
  var dateTime= responseJson.datetime
  var hour=dateTime.slice(11,13)
  a = hour;
  var minute = dateTime.slice(14,16)
  b = minute;
  console.log(hour)
  

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<06){
        bg="sunrise1.png"
    }else if(hour>=06&&hour<08){
        bg="sunrise2.png"
    }else if(hour>=08&&hour<10){
        bg="sunrise3.png"
    }else if(hour>=10&&hour<12){
        bg="sunrise4.png"
    }else if(hour>=12&&hour<14){
        bg="sunrise5.png"
    }else if(hour>=14&&hour<16){
        bg="sunrise6.png"
    }else if(hour>=16&&hour<18){
        bg="sunset7.png"
    }else if(hour>=18&&hour<20){
        
        bg="sunset8.png"
     
    }else if(hour>=20&&hour<22){
        bg="sunset11.png"
    }else if(hour>=22&&hour<=24){
        bg="sunset12.png"
    }
    else if(hour>=00 && hour<02)
    {
        bg = "sunset12.png"
    }
    else if(hour>=02&&hour<04){
        bg="sunset11.png"
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
  
   
}
