let instances = [];  // Array to store instances

function setup() {
  let objects = [
    { class: player, name: "jacob", pos: [10, 10] }
  ];

  for (const obj of objects) {
    let instance = new obj.class(obj.name, obj.pos);  // Create an instance
    instances.push(instance);  // Store the instance
  }

  for (const instance of instances) {
    instance.setup();  // Setup each instance]

    async function fetchData() {
      try {
        const response = await fetch(`./class-data/${instance.constructor.name}.json`); // Fetch data from the URL
        if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
        
        data = await response.json(); // Parse the response as JSON
        instance.data = data; // Store the data in memory

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()

  }
  
  print(instances)

}

function draw() {
  createCanvas(800, 600);
  background(20);

  for (const instance of instances) {
    instance.draw();  // Call draw on each instance
  }
}