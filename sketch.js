let instances = [];  // Array to store instances
let master_random = [0,0] // The thing that displaces all elements 

function setup() {
  let objects = [
    { class: player, sprite: "player", name: "jacob", pos: [400, 300] },
    { class: thing, sprite: "sun", name: "micheal", pos: [0, 0] },
    { class: thing, sprite: "floor", name: "afton", pos: [0, 0] }
  ];

  for (const obj of objects) {
    let instance = new obj.class(obj.name, obj.pos, obj.sprite);  // Create an instance, which is basically an element on the screen
    instances.push(instance);  // Store the instance in memory
  }

  for (const instance of instances) {
    instance.setup();  // Setup each instance
    async function fetchData() {
      try {
        const response = await fetch(`./class-data/${instance.sprite}.json`); // Fetch the instance data
        if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
        data = await response.json(); // Get the response as a JSON
        instance.data = data; // Store the data in instance properties
        print(instance.sprite)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }
  // print(instances)
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