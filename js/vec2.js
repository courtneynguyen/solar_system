var Vec2 = function(x, y){
  this.x = x || 0;
  this.y = y || 0;
}

Vec2.prototype.addVec = function(v){
  this.x += v.x;
  this.y += v.y;
}
