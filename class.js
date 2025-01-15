class thing {
  constructor(name,pos,sprite) {
    this.name = name;
    this.pos = pos;
    this.thickness = 5;
    this.sprite = sprite
  }

  setup(){
    console.log(`I'm ${this.name}!`+` at ${this.pos}`);

    async function fetchData() {
      try {
        const response = await fetch(`./class-data/${this.sprite}.json`); // Fetch the this data
        if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
        data = await response.json(); // Get the response as a JSON
        this.data = data; // Store the data in this properties
        print(this.sprite)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }

  
  draw() {
      strokeWeight(1);
      let fsetX = this.pos[0]
      let fsetY = this.pos[1]
      let randx = [1,-1]
      
      let offsetX = random(randx); // Random x offset
      let offsetY = random(randx); // Random y offset

      if (this.data != null){

        let obj = this.data

        for (const part in obj.sprite) { // For each 'part' of the sprite
          if (obj.sprite.hasOwnProperty(part)) { // So long as it has a part
            
            let minX = Math.min(...obj.sprite[part].map(p => p[0]));
            let maxX = Math.max(...obj.sprite[part].map(p => p[0]));
            let minY = Math.min(...obj.sprite[part].map(p => p[1]));
            let maxY = Math.max(...obj.sprite[part].map(p => p[1]));

              for(let point=1; point < obj.sprite[part].length; point++){ // Iterate for every vector position of that part

                  let curr = obj.sprite[part][point];
                  let prev = obj.sprite[part][point-1];

                  if (point % 3){
                    offsetX = random(randx); // Random x offset
                    offsetY = random(randx); // Random y offset
                  }
                  
                  
                  stroke('white');
                  strokeWeight(this.thickness);
                  line(prev[0]+fsetX + offsetX, prev[1]+fsetY + offsetY,
                      curr[0]+fsetX + offsetY, curr[1]+fsetY + offsetX
                  );

            };
          }
        } 
      }
    }
  }

  class player extends thing {
    constructor(name,pos,sprite) {
      super(name,pos,sprite)
      this.thickness = 3;
    }
    setup(){
      super.setup()
    }
    draw() {
      super.draw()
      }
    }
