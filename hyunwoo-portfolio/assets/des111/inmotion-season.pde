int seasonDuration = 180;
int totalSeasons = 4;

PVector[] snowflakes;
int numSnowflakes = 100;

void setup() {
  size(500, 500);
  frameRate(60);
  snowflakes = new PVector[numSnowflakes];
  for (int i = 0; i < numSnowflakes; i++) {
    snowflakes[i] = new PVector(random(width), random(-height, 0));
  }
}

void draw() {
  background(getSmoothSkyColor());
  drawGround();
  drawTree();
  drawSeasonalMotion();
}

void drawGround() {
  fill(100, 200, 100);
  noStroke();
  rect(0, height * 0.8, width, height * 0.2);
}

void drawTree() {
  pushMatrix();
  translate(width/2, height * 0.8);
  stroke(101, 67, 33);
  strokeWeight(10);
  line(0, 0, 0, -80);
  int currentSeason = (frameCount / seasonDuration) % totalSeasons;
  noStroke();
  if (currentSeason == 0) fill(255, 182, 193);
  else if (currentSeason == 1) fill(34, 139, 34);
  else if (currentSeason == 2) fill(205, 133, 63);
  if (currentSeason != 3) drawTreeTriangle();
  popMatrix();
}

void drawTreeTriangle() {
  triangle(-80, -80, 80, -80, 0, -280);
}

color getSmoothSkyColor() {
  int index = (frameCount / seasonDuration) % totalSeasons;
  float amt = (frameCount % seasonDuration) / float(seasonDuration);
  color[] seasonColors = {
    color(200, 230, 255),
    color(135, 206, 235),
    color(250, 220, 180),
    color(220, 240, 255)
  };
  color from = seasonColors[index];
  color to = seasonColors[(index + 1) % totalSeasons];
  return lerpColor(from, to, amt);
}

void drawSeasonalMotion() {
  int currentSeason = (frameCount / seasonDuration) % totalSeasons;
  if (currentSeason == 1) {
    float x = map((frameCount % seasonDuration), 0, seasonDuration, 0, width);
    fill(255, 204, 0);
    noStroke();
    ellipse(x, 100, 40, 40);
  } else if (currentSeason == 3) {
    fill(255);
    noStroke();
    for (int i = 0; i < numSnowflakes; i++) {
      ellipse(snowflakes[i].x, snowflakes[i].y, 4, 4);
      snowflakes[i].y += 2;
      if (snowflakes[i].y > height) {
        snowflakes[i].y = random(-50, 0);
        snowflakes[i].x = random(width);
      }
    }
  }
}

void keyPressed() {
  if (key == ENTER) {
    saveFrame("lineWork1-####.tif");
  }
}
