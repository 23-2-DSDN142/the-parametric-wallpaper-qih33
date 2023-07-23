//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let colorValue = 'yellow';

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let headX = 75;
  let headY = 75;
  let eyeY = headY - 10;
  let earY = headY - 40;
  let eyeSize = 10;
  
  fill(255);
  stroke(0, 0, 0);



  if (mouseIsPressed){
    colorValue = 'red';
  }
  else {
    colorValue = 'yellow';
  }
  fill(colorValue);
  ellipse(headX, headY, 70, 70); //head

  fill(0, 0, 0) // blue colour

  ellipse(headX - 15, eyeY, eyeSize, eyeSize) //left eye // 60 before

  ellipse(headX + 15, eyeY, eyeSize, eyeSize) // right eye
  stroke(0, 0, 0);
  arc(75, 90, 30, 15, 0, 180);

  // line(headX - 5, headY + 10, headX + 5, headY + 5);
  // line(headX + 5, headY + 10, headX - 5, headY + 5);


}
