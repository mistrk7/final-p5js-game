let instances = [];  // Array to store instances
let master_random = [0,0] // The thing that displaces all elements 

function setup() {
  let objects = [
    { class: player, sprite: "player", name: "jacob", pos: [50, 400] },
    { class: player, sprite: "player_fist", name: "jacob-fist", pos: [0,0] },
    { class: player, sprite: "player_foot", name: "jacob-foot", pos: [0,0] },
    { class: player, sprite: "player_foot", name: "jacob-foot-2", pos: [0,0] },
    { class: projectile, sprite: "player_fist", name: "jacob-foot-2", pos: [50, 400], direction: "up" },

    { class: thing, sprite: "sun", name: "micheal", pos: [0, 0] },
    { class: thing, sprite: "floor", name: "afton", pos: [0, 0] }
  ];

  // Fist position
  objects[1].pos = [objects[0].pos[0]+120, objects[0].pos[1]]
  // Foot position
  objects[2].pos = [objects[0].pos[0], objects[0].pos[1]+130]
  // Foot 2 position
  objects[3].pos = [objects[0].pos[0]+100, objects[0].pos[1]+130]


  for (const obj of objects) {
    let instance = new obj.class(obj.name, obj.pos, obj.sprite, obj.direction);  // Create an instance, which is basically an element on the screen
    instances.push(instance);  // Store the instance in memory
  }

  for (const instance of instances) {
    instance.setup();  // Setup each instance
  }
  print(instances)
}

let count = 0;
let tick = 0
function draw() {
  tick ++

  // Every 100 ticks, spawn a new projectile
  if (tick % 100 === 0) {
    let instance = new projectile("proje", [700, 80], "player_fist", "down");  
    instances.push(instance); 
    instance.setup();  
    print("DOWN");  
  }

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

function mouseClicked(){
  print("yeah")
  let instance = new projectile("proj", [200,400], "player_fist", "up");  // Create an instance, which is basically an element on the screen
  instances.push(instance);  // Store the instance in memory#
  instance.setup(); 
  print(instances)
}