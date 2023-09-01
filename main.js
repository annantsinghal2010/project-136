video = ""

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting Objects";
    var inputElement = document.getElementById("userInput");
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}