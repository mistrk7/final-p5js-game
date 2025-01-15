class thing {
  constructor(name,pos,sprite) {
    this.name = name;
    this.pos = pos;
    this.thickness = 5;
    this.sprite = sprite
  }

  setup(){
      console.log(`I'm ${this.name}!`+` at ${this.pos}`);
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
              for(let point=1; point < obj.sprite[part].length; point++){ // Iterate for every vector position of that part
  
                  let curr = obj.sprite[part][point];
                  let prev = obj.sprite[part][point-1];

                  if (point % 3){
                    offsetX = random(randx); // Random x offset
                    offsetY = random(randx); // Random y offset
                  }
                  
                  
                  stroke('white');
                  strokeWeight(5);
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
    }
    setup(){
      super.setup()
    }
    draw() {
      super.draw()
      }
    }

  class sun extends thing {
    constructor(name,pos) {
      super(name,pos)
    }
    setup(){
      super.setup()
    }
    draw() {
      super.draw()
      }
     }