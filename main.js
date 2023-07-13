function setup()
{
    canvas = createCanvas(400, 400)
    canvas.center()

    video = createCapture(VIDEO)
    video.size(200, 200)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

leftWristX = 0
rightWristX = 0
difference = 0

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('difference:'+ difference);
    }
}

function modelLoaded()
{
    console.log('It is loaded');
}

function draw()
{
    background('white');
    textSize(difference);
    fill('blue');
    text('Hi', 10, 100);
}