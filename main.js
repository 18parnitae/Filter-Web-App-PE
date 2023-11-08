function preload() {

}

function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('modelLoaded');
}

function draw() {
    image(video, 0, 0, 280, 280);
}

function take_snapshot() {
    save('myFilterImage.png');
}