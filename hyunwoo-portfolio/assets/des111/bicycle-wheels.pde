int tileSize = 100;
int gridSize = 8;
float duration = 8.0; 

boolean[] captured = {false, false, false};
float[] captureTimes = {0.0, 0.5, 1.0}; 

void setup() {
  size(800, 800);
  frameRate(60);
}

void draw() {
  background(255);
  float t = (millis() % int(duration * 1000)) / (duration * 1000.0);

  for (int row = 0; row < gridSize; row++) {
    for (int col = 0; col < gridSize; col++) {
      float x = col * tileSize;
      float y = row * tileSize;
      float offset = (row + col) * 0.02;
      drawTile(x, y, (t + offset) % 1.0);
    }
  }

  for (int i = 0; i < captureTimes.length; i++) {
    if (!captured[i] && abs(t - captureTimes[i]) < 0.01) {
      saveFrame("wheel_snapshot_" + i + ".tif");
      captured[i] = true;
    }
  }
}

void drawTile(float x, float y, float t) {
  pushMatrix();
  translate(x + tileSize / 2, y + tileSize / 2);

  float pulse = 3 * sin(TWO_PI * t); // subtle breathing
  float radius = 40 + pulse;

  rotate(TWO_PI * t); // rotate full circle over loop

  // Outer rim
  stroke(0);
  noFill();
  ellipse(0, 0, radius * 2, radius * 2);

  // Secondary rim
  stroke(150);
  ellipse(0, 0, radius * 1.8, radius * 1.8);

  // Colored spokes
  for (int i = 0; i < 12; i++) {
    float angle = TWO_PI / 12 * i;
    float px = cos(angle) * radius;
    float py = sin(angle) * radius;
    stroke(lerpColor(color(0), color(120, 0, 200), i / 12.0));
    line(0, 0, px, py);
  }

  // Hub
  fill(100);
  noStroke();
  ellipse(0, 0, 10, 10);

  popMatrix();
}
