var som = "";
var som2 = "";
var music = 1;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score = 0;
status1 = "";
status2 = "";
function preload() {
    som = loadSound("Minecraft_Otherside.mp3");
    som2 = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}
function draw() {
    image(video, 0, 0, 400, 400);
    fill("red");
    if (score >= 0.2) {
        circle(leftWristX, leftWristY, 20);
        circle(rightWristX, rightWristY, 20);
        status1 = som.isPlaying();
        status2 = som2.isPlaying();
        if (music == 1 && status1 == false) {
            som.play();
            if (status2 == true) {
                som2.stop();
            }
            document.getElementById("MusicName").innerHTML = "Otherside";
        }
        if (music == 2 && status2 == false) {
            som2.play();
            if (status1 == true) {
                som.stop();
            }
            document.getElementById("MusicName").innerHTML = "Dj Music";
        }
    }
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotResults(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        score = results[0].pose.keypoints[9].score;
        if (rightWristY > leftWristY) {
            music = 1
        } else {
            music = 2
        }
    }
}