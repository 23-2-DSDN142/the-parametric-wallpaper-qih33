//your parameter variables go here!
var background_color = '#fe4365';
var headX = 75;
var headY = 75;
var eyeY = headY - 10;
var face_color = '#f7db4f';
var face_color1 = '#f7db4f';
var face_color2 = '#ede574';
var face_color3 = '#f9d423';
var face_color4 = '#fc913a';
var face_color5 = '#ff4e50';
var face_color6 = '#ff4e50';
var face_color7 = '#ff4e50';
var face_color8 = '#ff4e50';
var face_color9 = '#fc913a';
var face_color10 = '#fc913a';
var face_color11 = '#f7db4f';
var face_color12 = '#f7db4f';
var face_color13 = '#fc913a';
var face_color14 = '#fc913a';
var side_color2 = '#ffffff';
var faceSize = 20;
var eyeSizeX = 10;
var eyeSizeY = 15;
var eye_light = 255;
var eye_color1 = '#ff686b';
var eye_color2 = '#ff686b';
var mouthColor = '#ff686b';
var outsideColor = '#f34a4a';
var insideColor = '#f1d3bc';
var positionX = 20;
var positionY = 80;
var stroke_color = '#615049';
var stroke_weight = 3;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
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

  // if background color is black then draw the colorfull face
  if (background_color ==='#363636')
  {
     draw_colorfulface();
     
  }
  else {
    draw_face()
  }
  
  draw_eye();
  draw_mouth();
  draw_bigeye();
}

function draw_face()
{
  stroke('#363636');
  fill(face_color);
  ellipse(headX, headY, 70, 70); //head
  fill(side_color2) ;
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

function draw_colorfulface()
{
  stroke(stroke_color);
  fill(face_color);
  ellipse(headX, headY, 70, 70); //head
  fill(face_color1);
  ellipse(84, 31, faceSize, faceSize);
  fill(face_color2);
  ellipse(64, 32, faceSize, faceSize);
  fill(face_color3);
  ellipse(47, 41, faceSize, faceSize);
  fill(face_color4);
  ellipse(35, 56, faceSize, faceSize);
  fill(face_color5);
  ellipse(31, 75, faceSize, faceSize);
  fill(face_color6);
  ellipse(35, 94, faceSize, faceSize);
  fill(face_color7);
  ellipse(47, 110, faceSize, faceSize);
  fill(face_color8);
  ellipse(65, 118, faceSize, faceSize);
  fill(face_color9);
  ellipse(85, 118, faceSize, faceSize);
  fill(face_color10);
  ellipse(103, 109, faceSize, faceSize);
  fill(face_color11);
  ellipse(103, 39, faceSize, faceSize);
  fill(face_color12);
  ellipse(115, 56, faceSize, faceSize);
  fill(face_color13);
  ellipse(119, 75, faceSize, faceSize);
  fill(face_color14);
  ellipse(116, 94, faceSize, faceSize);
}

function draw_eye()
{
  stroke('#363636');
  fill(eye_color1);
  ellipse(headX - 15, eyeY, eyeSizeX, eyeSizeY) //left eye 
  fill(eye_color2);
  ellipse(headX + 15, eyeY, eyeSizeX, eyeSizeY) // right eye
  fill(eye_light);
  ellipse(60, 60, 7, 7) // left eye
  ellipse(58, 67, 6, 6) // left eye
  ellipse(90, 60, 7, 7) // right eye
  ellipse(92, 67, 6, 6) // right eye

}

function draw_mouth(){
    strokeWeight(1); 
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

function draw_bigeye(){

  stroke(stroke_color);
  strokeWeight(stroke_weight);
  fill(outsideColor);
  ellipse(150 + positionX, 43 + positionY, 55, 55);
  fill(insideColor);
  ellipse(150 + positionX, 43 + positionY, 35, 35); //Big eye
  fill(eye_light)
  ellipse(145 + positionX, 35 + positionY, 16, 16);
  ellipse(154 + positionX, 54 + positionY, 12, 12);
}