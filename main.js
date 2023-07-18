var som = "";
var som2 = "";
function preload(){
    som = loadSound("Minecraft_Otherside.mp3");
    som2 = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
}