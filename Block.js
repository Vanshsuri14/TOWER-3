class Block {
  constructor(x, y, width, height) {
    var options = {

      'restitution': 0.8,
      'friction': 0.5,
      'density': 0.05,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;

    
    

  }
  display() {
    if (this.body.speed < 5) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);

    } else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);


      pop();

    }

    
    





  }
  Score(){
    if(this.Visibility<0 && this.Visibility >-105){
      Score++;

    }
  }
}