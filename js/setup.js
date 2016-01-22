var canvas = document.getElementById('canvas');
var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var canvasCenterX = canvasWidth/2;
var canvasCenterY = canvasHeight/2;
var context = canvas.getContext('2d');

var scene = {
  children: [],
  update: function(){
    this.children.forEach(function(child){
      child.update();
    });
  },
  render: function(){
    context.clearRect(0, 0, canvasHeight, canvasWidth);
    context.save();
    context.translate(canvasCenterX, canvasCenterY);
    this.children.forEach(function(child){
      child.render(context);
    });
    context.restore();
  },
  evaluateGravitationForces: function(){

  },
  tick: function(){
    var _this = this;
    this.update();
    this.evaluateGravitationForces();
    this.render();
    this.timeoutId = setTimeout(function(){
      _this.tick();
    }, 1000/60);
  }
};
