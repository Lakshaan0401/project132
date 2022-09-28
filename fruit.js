img ="";
stats ="";
object = [];
function preload(){
    img = loadImage('send-fruit-basket-to-india_large.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelloaded(){
    console.log("model is loaded");
    stats = true;
    objectDetector.detect(img,gotresults)
}

function back(){
    window.location = "index.html";
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("banana",430,120);
    noFill();
    stroke("#ff0000");
    rect(410,100,100,150);
}