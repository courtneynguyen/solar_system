var Planet = function(mass, position, velocity){
  this.mass = mass || 100;
  this.position = position || new Vec2();
  this.velocity = velocity || new Vec2();
}
