img ="";
stats ="";
function preload(){
    img = loadImage('istockphoto-1213695547-612x612.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("bed",110,265);
    noFill();
    stroke("#ff0000");
    rect(102,250,300,100);
}

function modelloaded(){
    console.log("model is loaded");
    stats = true;
    objectDetector.detect(img,gotresults);
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
    }
}
