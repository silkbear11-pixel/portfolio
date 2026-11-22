int maxBranches = 300;
ArrayList<Branch> branches;

void setup() {
  size(800, 800);
  background(0);
  branches = new ArrayList<Branch>();
  frameRate(60);
}

void draw() {
  for (int i = 0; i < branches.size(); i++) {
    branches.get(i).update();
    branches.get(i).display();
  }
}

void mousePressed() {
  if (branches.size() < maxBranches) {
    branches.add(new Branch(mouseX, mouseY));
  }
}

void keyPressed() {
  if (key == 's' || key == 'S') {
    String timestamp = nf(year(), 4) + nf(month(), 2) + nf(day(), 2) + "_" + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
    saveFrame("coolColorCapture_" + timestamp + ".tif");
    println("TIFF saved as: coolColorCapture_" + timestamp + ".tif");
  }
}

class Branch {
  ArrayList<PVector> points;
  float angle;
  float speed;
  color c;
  int life;
  int branchChance;

  Branch(float x, float y) {
    points = new ArrayList<PVector>();
    points.add(new PVector(x, y));
    angle = random(TWO_PI);
    speed = random(1, 2.5);
    c = color(random(100, 255), random(100, 255), random(100, 255));
    life = int(random(100, 200));
    branchChance = int(random(30, 100));
  }

  void update() {
    if (life > 0) {
      PVector last = points.get(points.size() - 1);
      float offsetAngle = radians(random(-20, 20));
      PVector next = new PVector(
        last.x + cos(angle + offsetAngle) * speed,
        last.y + sin(angle + offsetAngle) * speed
      );

      if (next.x > 0 && next.x < width && next.y > 0 && next.y < height) {
        points.add(next);
        life--;

        if (points.size() > 200) {
          points.remove(0);
        }

        if (life % branchChance == 0 && branches.size() < maxBranches) {
          branches.add(new Branch(next.x, next.y));
        }
      } else {
        life = 0;
      }
    }
  }

  void display() {
    stroke(c, 120);
    strokeWeight(1.2);
    for (int i = 1; i < points.size(); i++) {
      PVector p1 = points.get(i - 1);
      PVector p2 = points.get(i);
      line(p1.x, p1.y, p2.x, p2.y);
    }
  }
}
