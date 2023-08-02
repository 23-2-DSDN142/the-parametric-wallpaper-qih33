//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let background_color = '#363636';


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
   background(background_color);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let headX = 75;
  let headY = 75;
  let eyeY = headY - 10;
  let earY = headY - 40;
 // let eyeSize = 10;
  let noiseSize = 5;

  
  draw_face(headX, headY, 20, '#f7db4f', '#ec2049');
  
  
  
  //stroke(0, 0, 0);
  //line(80, 80, 100, 100);
 // fill('yellow');
  // ellipse(headX, headY, 70, 70); //head

  // fill(255) // blue colour
  // ellipse(84, 35, 20, 20);
  // ellipse(69, 34, 20, 20);
  // ellipse(56, 38, 20, 20);
  // ellipse(45, 45, 20, 20);
  // ellipse(36, 58, 20, 20);
  // ellipse(32, 73, 20, 20);
  // ellipse(35, 85, 20, 20);
  // ellipse(42, 98, 20, 20);
  // ellipse(51, 108, 20, 20);
  // ellipse(63, 113, 20, 20);
  // ellipse(76, 113, 20, 20);
  // ellipse(90, 110, 20, 20);
  // ellipse(105, 103, 20, 20);
  
  
  // ellipse(99, 43, 20, 20);
  // ellipse(111, 58, 20, 20);
  // ellipse(114, 73, 20, 20);
  // ellipse(113, 88, 20, 20);
 
  // strokeWeight(1); //mouth
  // noFill();
  // beginShape();
  // curveVertex(88, 88);
  // curveVertex(88, 88);
  // curveVertex(80, 95);
  // curveVertex(68, 95);
  // curveVertex(60, 88);
  // curveVertex(60, 88);
  // endShape();
  draw_eye(headX, eyeY, 10, 15);
  draw_mouth();
  draw_bigeye('green', 'orange', 80);

  // ellipse(headX - 15, eyeY, eyeSize, eyeSize) //left eye 

  // ellipse(headX + 15, eyeY, eyeSize, eyeSize) // right eye

  // noStroke(0, 0, 0);
  // fill('green');
  // ellipse(150, 43 + positionY, 55, 55);
  // fill('orange');
  // ellipse(150, 43 + positionY, 35, 35); //Big eye
  // fill(255)
  // ellipse(145, 35 + positionY, 16, 16);
  // ellipse(154, 54 + positionY, 12, 12);
  
}

function draw_face(headX, headY, faceSize, faceColor,sideColor)
{
  stroke(0, 0, 0);
  //line(80, 80, 100, 100);
  fill(faceColor);
  ellipse(headX, headY, 70, 70); //head

  fill(sideColor) // blue colour
  ellipse(84, 35, faceSize, faceSize);
  ellipse(69, 34, faceSize, faceSize);
  ellipse(56, 38, faceSize, faceSize);
  ellipse(45, 45, faceSize, faceSize);
  ellipse(36, 58, faceSize, faceSize);
  ellipse(32, 73, faceSize, faceSize);
  ellipse(35, 85, faceSize, faceSize);
  ellipse(42, 98, faceSize, faceSize);
  ellipse(51, 108, faceSize, faceSize);
  ellipse(63, 113, faceSize, faceSize);
  ellipse(76, 113, faceSize, faceSize);
  ellipse(90, 110, faceSize, faceSize);
  ellipse(105, 103, faceSize, faceSize);
  
  
  ellipse(99, 43, faceSize, faceSize);
  ellipse(111, 58, faceSize, faceSize);
  ellipse(114, 73, faceSize, faceSize);
  ellipse(113, 88, faceSize, faceSize);
}

function draw_eye(headX, eyeY, eyeSizeX, eyeSizeY)
{
  stroke(0, 0, 0);
  fill('white');
  strokeWeight(1);
  ellipse(headX - 15, eyeY, eyeSizeX, eyeSizeY) //left eye 

  ellipse(headX + 15, eyeY, eyeSizeX, eyeSizeY) // right eye

}

function draw_mouth(){
    strokeWeight(1); //mouth

    noFill();
    beginShape();
    curveVertex(88, 88);
    curveVertex(88, 88);
    curveVertex(80, 95);
    curveVertex(68, 95);
    curveVertex(60, 88);
    curveVertex(60, 88);
    endShape();
}

function draw_bigeye(outsideColor, insideColor, positionY){
  noStroke(0, 0, 0);
  fill(outsideColor);
  ellipse(150, 43 + positionY, 55, 55);
  fill(insideColor);
  ellipse(150, 43 + positionY, 35, 35); //Big eye
  fill(255)
  ellipse(145, 35 + positionY, 16, 16);
  ellipse(154, 54 + positionY, 12, 12);
}