//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;



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
  let noiseSize = 5;
  

  //text("(" + mouseX + ", " + mouseY + ")" , mouseX, mouseY);
  
  
  stroke(0, 0, 0);
  //line(80, 80, 100, 100);
  fill('yellow');
  ellipse(headX, headY, 70, 70); //head

  fill(255) // blue colour

   ellipse(headX - 15, eyeY, eyeSize, eyeSize) //left eye 

   ellipse(headX + 15, eyeY, eyeSize, eyeSize) // right eye
   ellipse(headX, headY + 5, noiseSize , noiseSize - 3);//noise
  //  noFill();
  //  curve(5, 86, 63, 84, 63, 121, 10, 95);
  // stroke(0, 0, 0);
  // arc(75, 90, 30, 15, 0, 180);

  // line(headX - 5, headY + 10, headX + 5, headY + 5);
  // line(headX + 5, headY + 10, headX - 5, headY + 5);
  console.log(mouseX);


}
