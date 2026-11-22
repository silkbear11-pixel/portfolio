float minHeight = 100;
float maxHeight = 400;
float springHeight;
int numCoils = 20;

void setup() {
  size(500, 500);
  frameRate(60);
}

void draw() {
  background(240);
  drawSpring();
}

void drawSpring() {
  springHeight = map(constrain(mouseY, 0, height), 0, height, minHeight, maxHeight);
  float spacing = springHeight / numCoils;
  
  pushMatrix();
  translate(width/2, height/2 - springHeight/2);
  
  for (int i = 0; i <= numCoils; i++) {
    float lineWidth = map(i, 0, numCoils, 1, 6);
    float halfWidth = map(mouseX, 0, width, 10, 80);
    stroke(0);
    strokeWeight(lineWidth);
    line(-halfWidth, i * spacing, halfWidth, i * spacing);
  }
  popMatrix();
}

void keyPressed() {
  if (key == ENTER) {
    saveFrame("lineWork1-####.tif");
  }
}
