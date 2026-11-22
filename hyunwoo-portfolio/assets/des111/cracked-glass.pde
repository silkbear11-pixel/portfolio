ArrayList<CrackLine> cracks;
boolean takeScreenshot = false;

void setup() {
  size(800, 800);
  background(0);
  stroke(255);
  strokeWeight(1.2);
  cracks = new ArrayList<CrackLine>();
}

void draw() {
  for (int i = cracks.size() - 1; i >= 0; i--) {
    CrackLine c = cracks.get(i);
    c.update();
    if (c.done) cracks.remove(i);
  }

  fill(255);
  text("Click to create cracks | Press 'S' to save screenshot", 20, 30);
  text("Active cracks: " + cracks.size(), 20, 45);

  // Save screenshot if triggered
  if (takeScreenshot) {
    saveFrame("cracked_glass_####.tif");
    takeScreenshot = false;
  }
}

void mousePressed() {
  int linesToSpawn = int(random(10, 16)); // Balanced number of cracks
  for (int i = 0; i < linesToSpawn; i++) {
    float angle = random(TWO_PI);
    cracks.add(new CrackLine(mouseX, mouseY, angle, 0)); // depth = 0
  }
}

void keyPressed() {
  if (key == 's' || key == 'S') {
    takeScreenshot = true;
  }
}

// ------------------ Crack Line Class ------------------
class CrackLine {
  float x, y;
  float angle;
  float speed = 2.5;
  int length = 0;
  int maxLength;
  boolean done = false;
  int stepsUntilTurn;
  int depth;

  CrackLine(float startX, float startY, float angle, int depth) {
    this.x = startX;
    this.y = startY;
    this.angle = angle;
    this.depth = depth;
    this.maxLength = int(random(120, 220));
    this.stepsUntilTurn = int(random(10, 25));
  }

  void update() {
    if (done || length >= maxLength) {
      done = true;
      return;
    }

    // Slight directional change
    if (stepsUntilTurn <= 0) {
      angle += radians(random(-25, 25));
      stepsUntilTurn = int(random(10, 25));
    } else {
      stepsUntilTurn--;
    }

    float newX = x + cos(angle) * speed;
    float newY = y + sin(angle) * speed;

    if (newX < 0 || newX > width || newY < 0 || newY > height) {
      done = true;
      return;
    }

    stroke(255);
    line(x, y, newX, newY);

    x = newX;
    y = newY;
    length++;

    // Allow controlled branching
    if (depth < 2 && random(1) < 0.02) {
      float branchAngle = angle + radians(random(-60, 60));
      cracks.add(new CrackLine(x, y, branchAngle, depth + 1));
    }
  }
}
