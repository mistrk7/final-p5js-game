let instances = [];  // Array to store instances
let master_random = [0,0] // The thing that displaces all elements 

function setup() {
  let objects = [
    { class: player, sprite: "player", name: "jacob", pos: [400, 300] },
    { class: player, sprite: "player_fist", name: "jacob-fist", pos: [0, 0] },
    { class: player, sprite: "player_foot", name: "jacob-foot", pos: [0,0] },

    { class: thing, sprite: "sun", name: "micheal", pos: [0, 0] },
    { class: thing, sprite: "floor", name: "afton", pos: [0, 0] }
  ];

  // Fist position
  objects[1].pos = [objects[0].pos[0]+ 150, objects[0].pos[0]+ 5]

  // Foot position
  objects[2].pos = [objects[0].pos[0]+ 5, objects[0].pos[0]+ 5]

  for (const obj of objects) {
    let instance = new obj.class(obj.name, obj.pos, obj.sprite);  // Create an instance, which is basically an element on the screen
    instances.push(instance);  // Store the instance in memory
  }

  for (const instance of instances) {
    instance.setup();  // Setup each instance
  }
  print(instances)
}

let count = 0;

function draw() {
  createCanvas(800, 600);
  background(20);

  if (++count % 5 === 0) { // Wobbly logic
    master_random = [random(-1, 1), random(-1, 1)];
  }

  // DRAW EACH INSTANCE
  for (const instance of instances) {
    instance.draw();  
  }
}