const width = 1272;
const height = 540;
let msg;

function setup() {
  createCanvas(width, height);
  msg = new MSG("HAPPY BIRTHDAY!");
}

function draw() {
  msg.speed = document.getElementById("speed").value;
  document.getElementById("speedCounter").innerHTML = msg.speed;
  background(255);
  msg.draw();
  msg.bounce();
  msg.move();
}

function MSG(msg) {
  this.x = random(100, width - 200);
  this.y = random(100, height - 200);
  this.speed = 5;
  this.xvel = random([-1, 1]);
  this.yvel = random([-1, 1]);
  this.msg = msg;
  this.size = 32;
  this.x_scl = msg.length * this.size * 0.625;
  this.y_scl = this.size;
  
  this.draw = function() {
    textSize(this.size);
    text(this.msg, this.x, this.y);
  };

  this.move = function() {
    this.x += this.xvel * this.speed;
    this.y += this.yvel * this.speed;
  };
  
  this.bounce = function() {
    if (this.y + this.y_scl > height || this.y < 25) {
      this.yvel *= -1
    }
    if (this.x + this.x_scl > width || this.x < 0) {
      this.xvel *= -1
    }
  };
}
