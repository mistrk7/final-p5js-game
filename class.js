class thing {
  constructor(name,pos,sprite) {
    this.name = name;
    this.pos = pos;
    this.thickness = 5;
    this.sprite = sprite
    this.data = null
  }

  setup(){
    console.log(`I'm ${this.name}!`+` at ${this.pos}`);

    const fetchData = async () => {
      try {
        const response = await fetch(`./class-data/${this.sprite}.json`); // get this data
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Get the resonse as a json
        this.data = data; // Store the data in this properties




        console.log(this.sprite); // Get the sprite name
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const obj = this
    
    // Combine all the parts into one
    
    fetchData();
  }

  
  draw() {
      strokeWeight(1);
      let fsetX = this.pos[0]
      let fsetY = this.pos[1]
      let randx = [1,-1]
      
      let offsetX = random(randx); // Random x offset
      let offsetY = random(randx); // Random y offset

      let obj = this.data
      let wholepart = []

      if (this.data != null){

        
        for (const part in obj.sprite) {
          if (obj.sprite.hasOwnProperty(part)) {
            wholepart = wholepart.concat(obj.sprite[part]);
          }
        }

        for (const part in obj.sprite) { // For each 'part' of the sprite
          if (obj.sprite.hasOwnProperty(part)) { // So long as it has a part
              for(let point=1; point < obj.sprite[part].length; point++){ // Iterate for every vector position of that part

                let bounding = [Infinity, -Infinity, Infinity, -Infinity] // min X, max X, min Y, max Y
                
                // Set up bounding box pos
                bounding[0] = Math.min(...wholepart.map(p => p[0]));
                bounding[1] = Math.max(...wholepart.map(p => p[0]));
                bounding[2] = Math.min(...wholepart.map(p => p[1]));
                bounding[3] = Math.max(...wholepart.map(p => p[1]));

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
                  
                  // Show bounding box
                  noFill();
                  stroke(0, 0, 255);
                  rect(this.pos[0],this.pos[1],bounding[1],bounding[3]);

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
