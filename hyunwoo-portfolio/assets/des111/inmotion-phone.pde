float maxRadius;
float pulseSpeed = 2.0;

void setup() {
  size(500, 500);
  background(0);
  maxRadius = dist(0, 0, width, height); // Allow pulse to go beyond canvas edges
  frameRate(60);
}

void draw() {
  background(0);
  
  drawGlowingCircles();
  drawPhone();
}

void drawGlowingCircles() {
  noFill();
  
  float spacing = 50;
  for (float r = (frameCount * pulseSpeed) % spacing; r < maxRadius; r += spacing) {
    float alpha = map(r, 0, maxRadius, 255, 0); // Fade opacity as radius increases
    stroke(255, alpha);
    strokeWeight(2);
    ellipse(width/2, height/2, r, r);
  }
}

void drawPhone() {
  fill(0);
  stroke(200);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width/2, height/2, 100, 160, 10);
  
  fill(0);
  stroke(255);
  strokeWeight(2);
  ellipse(width/2, height/2 + 65, 10, 10);
}

void keyPressed() {
  if (key == ENTER) {
    saveFrame("lineWork1-####.tif");
  }
}
