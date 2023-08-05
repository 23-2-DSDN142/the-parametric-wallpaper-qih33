//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let background_color = '#363636';


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
   background(background_color);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let headX = 75;
  let headY = 75;
  let eyeY = headY - 10;
  // let earY = headY - 40;
 // let eyeSize = 10;
  let noiseSize = 5;

  if (background_color !=='#363636')
  {
    console.log('true');
  }
  else {
    console.log('false');
  }

  draw_colorfulface(headX, headY, 20, '#f7db4f', '#ec2049');
  //draw_face(headX, headY, 20, '#f7db4f', '#ec2049');
  
  draw_eye(headX, eyeY, 10, 15);
  draw_mouth('#ff847c');
  draw_bigeye('green', 'orange', 10, 80);

}

function draw_face(headX, headY, faceSize, faceColor,sideColor)
{
  stroke(0, 0, 0);
  fill(faceColor);
  ellipse(headX, headY, 70, 70); //head
  fill(sideColor) // blue colour
  ellipse(84, 31, faceSize, faceSize);
  ellipse(64, 32, faceSize, faceSize);
  ellipse(47, 41, faceSize, faceSize);
  ellipse(35, 56, faceSize, faceSize);
  ellipse(31, 75, faceSize, faceSize);
  ellipse(35, 94, faceSize, faceSize);
  ellipse(47, 110, faceSize, faceSize);
  ellipse(65, 118, faceSize, faceSize);
  ellipse(85, 118, faceSize, faceSize);
  ellipse(103, 109, faceSize, faceSize);
  ellipse(103, 39, faceSize, faceSize);
  ellipse(115, 56, faceSize, faceSize);
  ellipse(119, 75, faceSize, faceSize);
  ellipse(116, 94, faceSize, faceSize);
}

function draw_colorfulface(headX, headY, faceSize, faceColor,sideColor)
{
  stroke(0, 0, 0);
  fill(faceColor);
  ellipse(headX, headY, 70, 70); //head
  // fill(sideColor) // blue colour
  fill('#e1f5c4');
  ellipse(84, 31, faceSize, faceSize);
  fill('#ede574');
  ellipse(64, 32, faceSize, faceSize);
  fill('#f9d423');
  ellipse(47, 41, faceSize, faceSize);
  fill('#fc913a');
  ellipse(35, 56, faceSize, faceSize);
  fill('#ff4e50');
  ellipse(31, 75, faceSize, faceSize);
  fill('#e1f5c4');
  ellipse(35, 94, faceSize, faceSize);
  fill('#ede574');
  ellipse(47, 110, faceSize, faceSize);
  fill('#f9d423');
  ellipse(65, 118, faceSize, faceSize);
  fill('#fc913a');
  ellipse(85, 118, faceSize, faceSize);
  fill('#ff4e50');
  ellipse(103, 109, faceSize, faceSize);
  fill('#a7226e');
  ellipse(103, 39, faceSize, faceSize);
  fill('#ec2049');
  ellipse(115, 56, faceSize, faceSize);
  fill('#f26b38');
  ellipse(119, 75, faceSize, faceSize);
  fill('##f7db4f');
  ellipse(116, 94, faceSize, faceSize);
}

function draw_eye(headX, eyeY, eyeSizeX, eyeSizeY)
{
  stroke(0, 0, 0);
  fill('#363636');
  strokeWeight(1);
  ellipse(headX - 15, eyeY, eyeSizeX, eyeSizeY) //left eye 

  ellipse(headX + 15, eyeY, eyeSizeX, eyeSizeY) // right eye
  fill('white');
  ellipse(60, 60, 7, 7) // left eye
  ellipse(58, 67, 6, 6) // left eye
  ellipse(90, 60, 7, 7) // right eye
  ellipse(92, 67, 6, 6) // right eye

}

function draw_mouth(mouthColor){
    strokeWeight(1); //mouth

    fill(mouthColor);
    beginShape();
    curveVertex(88, 88);
    curveVertex(88, 88);
    curveVertex(80, 95);
    curveVertex(68, 95);
    curveVertex(60, 88);
    curveVertex(60, 88);
    endShape();
    line(88,88, 60,88);
}

function draw_bigeye(outsideColor, insideColor,positionX,  positionY){
  noStroke(0, 0, 0);
  fill(outsideColor);
  ellipse(150+positionX, 43 + positionY, 55, 55);
  fill(insideColor);
  ellipse(150+positionX, 43 + positionY, 35, 35); //Big eye
  fill(255)
  ellipse(145+positionX, 35 + positionY, 16, 16);
  ellipse(154+positionX, 54 + positionY, 12, 12);
}