export class player {
    constructor(name,pos) {
      this.name = name;
      this.pos = pos;
    }
    
    setup(){
        console.log(`I'm ${this.name}!`);
    }

    draw() {
        fsetX = this.pos[0]
        fsetY = this.pos[1]

        fetch('./class-data/player.json')
        .then(response => response.json())
        .then(obj => {
          for (const part in obj.sprite) { // For each 'part' of the sprite
            if (obj.sprite.hasOwnProperty(part)) { // So long as it has a part
                for(let point=1; point<obj.sprite[part].length; point++){ // Iterate for every vector position of that part

                    let curr = obj.sprite[part][point];
                    let prev = sprite[part][point-1];

                    line(prev[0]-fsetX, prev[1]-fsetY,
                        curr[0]-fsetX, curr[1]-fsetY
                    );
              };
            }
          }
        })
        .catch(error => {
          console.error('Error loading JSON data:', error);
        });
    }
  }