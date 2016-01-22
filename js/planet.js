var Planet = function(mass, position, velocity){
  this.mass = mass || 100;
  this.position = position || new Vec2();
  this.velocity = velocity || new Vec2();
  this.getRadius();
}

Planet.prototype.render = function(context){
  context.save();
  context.translate(this.position.x, this.position.y);
  context.beginPath();
  context.arc(0, 0, this.radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'pink';
  context.fill();
  context.restore();
}

Planet.prototype.getRadius = function(){
  this.radius = 3 * (this.mass / 4 * Math.PI); // algo finding radius of a sphere
}

Planet.prototype.update = function(){
  this.position.addVec(this.velocity);
}
