class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image = loadImage("box.png");
      
      World.add(world, this.body);
    }
   
   display(){

    //console.log(this.body.speed);

     if(this.body.speed<5) {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
     }
     else {
      World.remove(world,this.body); 
      push();
      this.visibility = this.visibility-15;
      tint(255,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
      //to remove the boxes
    }
  }

    score() {
    //var score = 0;
    if(this.visibility<0 && this.visibility >- 105) {
      score++;
    }
  }
}
