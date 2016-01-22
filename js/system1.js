scene.children.push(new Planet(
  20
));
scene.children.push(new Planet(
  5,
  new Vec2(300, 0),
  new Vec2(0, 1)
));
scene.tick();
