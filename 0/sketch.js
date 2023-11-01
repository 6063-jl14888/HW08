let oImage; 
let mImage;
let rcolorPicker; 
let ycolorPicker; 
let bcolorPicker; 

let xOff;
let yOff;

function preload() {
  oImage = loadImage("./a.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rcolorPicker = createColorPicker('#FF0000'); 
  rcolorPicker.position(10, 10);

  ycolorPicker = createColorPicker('#FFFF00'); 
  ycolorPicker.position(10, 60);

  bcolorPicker = createColorPicker('#0000FF'); 
  bcolorPicker.position(10, 110);

  pixelDensity(1);
  print("Original size: ", oImage.width, " x ", oImage.height);

  if (oImage.width > width) {
    oImage.resize(width, 0);
  }
  if (oImage.height > height) {
    oImage.resize(0, height);
  }
  print("Scaled size: ", oImage.width, " x ", oImage.height);

  xOff = (width - oImage.width) / 2;
  yOff = (height - oImage.height) / 2;

  // copy image so we keep original intact
  mImage = oImage.get();
}

function draw() {
  background(255);
  image(oImage, xOff, yOff);

  let selectedrColor = rcolorPicker.color();
  let selectedyColor = ycolorPicker.color();
  let selectedbColor = bcolorPicker.color();
  
  mImage.loadPixels();
  for (let i = 0; i < mImage.pixels.length; i += 4) {

    let r = mImage.pixels[i];
    let g = mImage.pixels[i + 1];
    let b = mImage.pixels[i + 2];


    if (r > 150 && g < 100 && b < 100) {
      mImage.pixels[i] = red(selectedrColor);
      mImage.pixels[i + 1] = green(selectedrColor);
      mImage.pixels[i + 2] = blue(selectedrColor);
    }

    if (r > 220 && r < 255 && g > 180 && g < 220 && b > 70 && b < 90) {
      mImage.pixels[i] = red(selectedyColor);
      mImage.pixels[i + 1] = green(selectedyColor);
      mImage.pixels[i + 2] = blue(selectedyColor);
    }

    if (r < 20 && g < 50 && g < 70 && b > 100 && b < 120) {
      mImage.pixels[i] = red(selectedbColor);
      mImage.pixels[i + 1] = green(selectedbColor);
      mImage.pixels[i + 2] = blue(selectedbColor);
    }
  }
  mImage.updatePixels();

  push();
  translate(xOff, yOff);
  image(mImage, 0, 0);
  pop();
}
