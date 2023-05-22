NoseX = 0;
NoseY = 0;
rightwrist = 0;
leftwrist = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(560,150);

canvas = createCanvas(550,500)
canvas.position(560,150)

poseNet = ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotPoses);

}

function modelloaded(){
    console.log('PoseNet is Initialized!')
}

function gotPoses(results){
if(results.length > 0)
    {
    console.log(results)
    leftwrist = results[0].pose.leftWrist.x;
    rightwrist = results[0].pose.rightWrist.x; 
    difference = floor(leftwrist - rightwrist);
}
}
function draw(){
background('#969A97');
textSize(difference);
fill('#FFE787');
text('Dilpreet',50,400);
}