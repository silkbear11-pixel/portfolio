void setup() {
  size(500, 500);
  frameRate(30);
  noStroke();
}

void draw() {
  background(30); // Darker background for better contrast
  drawColorPattern();
}

void drawColorPattern() {
  int cols = 10;
  int rows = 5;
  float spacingX = width / cols;
  float spacingY = height / rows;
  
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      float x = i * spacingX + spacingX / 2;
      float y = j * spacingY + spacingY / 2 + sin((frameCount + j*10) * 0.05) * 10;
      float size = 20 + 10 * sin((frameCount + i*15) * 0.1);

      fill(colorChange(i, j, cols));
      ellipse(x, y, size, size);
    }
  }
}

color colorChange(int i, int j, int totalCols) {
  float shift = (frameCount + (totalCols - 1 - i) * 10 + j * 5) % 255;
  return color(shift, 200 - shift, 150 + (shift/2));
}

void keyPressed() {
  if (key == ENTER) {
    saveFrame("lineWork1-####.tif");
  }
}
