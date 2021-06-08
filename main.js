song="";

function preload(){
    song = loadSound("What Makes you Beautiful Soundtrack.mp3");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(500, 330);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function playsong(){
    song.play();
}