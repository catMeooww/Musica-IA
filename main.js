var som = "";
var som2 = "";
var music = 1;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    som = loadSound("Minecraft_Otherside.mp3");
    som2 = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults);
}
function draw(){
    image(video,0,0,400,400);
    fill("red");
    circle(leftWristX,leftWristY,20);
    circle(rightWristX,rightWristY,20);
    if (music == 1){
        som.play();
        som2.pause();
    }else{
        som2.play();
        som.pause();
    }
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotResults(results){
if (results.length > 0){
console.log(results)
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
if (rightWristY > leftWristY){
    music = 1
}else{
    music = 2
}
}
}