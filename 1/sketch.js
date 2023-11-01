class Wave {
  constructor(x, y) {
    this.centerX = x;
    this.centerY = y;
    this.radius = random(10,80);
    this.maxRadius = random(100,400);
    this.growthSpeed = 2;
  }

  update() {
    this.radius += this.growthSpeed;
  }

  display() {
    stroke(255);
    ellipse(this.centerX, this.centerY, this.radius * 2);
  }
}

class Button {
  constructor(_label, _x, _y, _onClick) {
    this.button = createButton(_label);
    this.button.position(_x, _y);
    this.button.style("width", width / 5 + "px");
    this.button.style("height", "30px");
    this.button.mouseClicked(_onClick);
  }

  html(_label) {
    this.button.html(_label);
  }
}

let song;

let shouldRestart;

// buttons
let backButton;
let playButton;
let stopButton;

let buttonY;
let waves = [];
let interval = 10;

function preload() {
  song = loadSound("./b.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(50);
  buttonY = height - 40;

  // init buttons
  backButton = new Button("⏮", 10, buttonY, backClicked);
  playButton = new Button("⏵", 20 + width / 4, buttonY, playClicked);
  stopButton = new Button("■", 30 + width / 2, buttonY, stopClicked);

  // for skipping back when paused
  shouldRestart = false;
}

function draw() {
  background(220, 20, 120);
  if (frameCount % interval == 0) {
    let x = random(width);
    let y = random(height);
    let newWave = new Wave(x, y);
    waves.push(newWave);
  }

  for (let i = 0; i < waves.length; i++) {
    let wave = waves[i];
    wave.update();
    wave.display();
  }

  for (let i = waves.length - 1; i >= 0; i--) {
    if (waves[i].radius > waves[i].maxRadius) {
      waves.splice(i, 1);
    }
  }

  if (song.isPlaying()) {
    playButton.html("▮▮");
  } else if (song.isPaused()) {
    playButton.html("⏵");
  } else {
    playButton.html("⏵");
  }
}

function backClicked() {
  if (song.isPlaying()) {
    song.jump(0);
  } else if (song.isPaused()) {
    shouldRestart = true;
  } else {
    song.stop();
  }
}

function playClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else if (song.isPaused()) {
    song.play();
    if (shouldRestart) {
      song.jump(0);
      shouldRestart = false;
    }
  } else {
    song.play();
  }
}

function stopClicked() {
  song.stop();
}
