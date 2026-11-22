void setup() {
  size(500, 500);
  background(255);
  stroke(0);
  strokeWeight(2);

  // Line Set 1
  line(0, 250, 50, 250);
  line(50, 250, 50, 50);
  line(50, 50, 250, 50);
  line(250, 50, 250, 0);

  // Line Set 2
  line(0, 0, 500, 500);

  // Line Set 3
  line(0, 300, 100, 300);
  line(100, 300, 100, 100);
  line(100, 100, 300, 100);
  line(300, 100, 300, 0);

  // Line Set 4
  line(0, 450, 150, 250);
  line(150, 250, 200, 300);
  line(200, 300, 350, 100);
  line(350, 100, 400, 150);
  line(400, 150, 500, 0);
}

 void draw() {
}

void keyPressed() {
  if (key == ENTER) {
    saveFrame("lineWork1-####.tif");
  }
}
