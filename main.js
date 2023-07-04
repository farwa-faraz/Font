function setup()
{
    canvas = createCanvas(500, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.size(300, 300)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded()
{
    console.log('It is loaded');
}

function draw()
{
    background('white');
}