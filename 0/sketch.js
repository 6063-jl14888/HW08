let oImage; 
let mImage;
let rcolorPicker; 
let ycolorPicker; 
let bcolorPicker; 

let xOff;
let yOff;

function preload() {
  oImage = loadImage("./a.jpg"); 
  oImagecopy = loadImage("./a.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rcolorPicker = createColorPicker('#FF0000'); 
  rcolorPicker.position(10, 10);

  ycolorPicker = createColorPicker('#EFBD4E'); 
  ycolorPicker.position(10, 60);

  bcolorPicker = createColorPicker('#064174'); 
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

  mImage = oImage.get();
}

function draw() {
  background(255);
  image(oImage, xOff, yOff);

  let selectedrColor = rcolorPicker.color();
  let selectedyColor = ycolorPicker.color();
  let selectedbColor = bcolorPicker.color();
  
  mImage.loadPixels();
  oImagecopy.loadPixels();

  for (let i = 0; i < mImage.pixels.length; i += 4) {

    let r = mImage.pixels[i];
    let g = mImage.pixels[i + 1];
    let b = mImage.pixels[i + 2];


    if (r > 150 && g < 100 && b < 100) {
      oImagecopy.pixels[i] = red(selectedrColor);
      oImagecopy.pixels[i + 1] = green(selectedrColor);
      oImagecopy.pixels[i + 2] = blue(selectedrColor);
    }

    if (r > 100 && r < 255 && g > 100 && g < 220 && b > 60 && b < 90) {
      oImagecopy.pixels[i] = red(selectedyColor);
      oImagecopy.pixels[i + 1] = green(selectedyColor);
      oImagecopy.pixels[i + 2] = blue(selectedyColor);
    }

    if (r >= 0 && r < 40 && g >= 50 && g < 100 && b >= 100 && b < 150) {
      oImagecopy.pixels[i] = red(selectedbColor);
      oImagecopy.pixels[i + 1] = green(selectedbColor);
      oImagecopy.pixels[i + 2] = blue(selectedbColor);
      console.log("Matched a blue pixel:", r, g, b);
    }
    
  }
  oImagecopy.updatePixels();

  push();
  translate(xOff, yOff);
  image(oImagecopy, 0, 0);
  pop();
}
