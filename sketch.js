let instances = [];  // Array to store instances

function setup() {
  let objects = [
    { class: player, name: "jacob", pos: [0, 0] }
  ];

  for (const obj of objects) {
    let instance = new obj.class(obj.name, obj.pos);  // Create an instance
    instances.push(instance);  // Store the instance
  }
}

function draw() {
  createCanvas(1280, 960);
  background(220);

  for (const instance of instances) {
    instance.draw();  // Call draw on each instance
  }
}