let desk; 
let pancake;

let objects = [];

function preload() {
  desk = loadImage('image/desk.jpg');
  pancake = loadImage('image/pancakes.jpeg');
  doggy = loadImage('image/dog.jpeg');
  treees = loadImage('image/trees.jpeg');
  muug = loadImage('image/mug.jpeg');


  slide = loadSound("sound/slide.mp3");
}

class Photograph {
  constructor(pos, type, media, name) {
    this.type = type;
    this.media = media; 
    this.name = name;
    this.size = [200, 300]; 
    this.pos = pos; 
    this.expand = true;
    this.old_size = this.size;
    this.old_pos = this.pos;
  }

  draw() {

  }

  onClicked() {

  }
}

let pancakes;

function setup() {
  createCanvas(1280, 960);

  dog = new Photograph([800, 100], "photo", doggy, "Dog");
  pancakes = new Photograph([500, 100], "photo", pancake, "Pancakes");
  trees = new Photograph([300, 500], "photo", treees, "Trees");
  mug = new Photograph([700, 500], "photo", muug, "Skeleton Mug");
}

function draw() {

  for (const x in objects){
    x.draw()
  }

  for (const x in objects){
    x.draw()
  }
  
  image(desk, 0, 0);
  pancakes.draw();
  dog.draw();
  trees.draw();
  mug.draw();
}

function mouseClicked() {
  pancakes.onClicked();
  dog.onClicked();
  trees.onClicked();
  mug.onClicked();
}
