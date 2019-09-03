class FloorLife extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/pyukumuku.gif';
    this.position.y += this.height - 50;
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
  }

  onClick() {
    console.log('im a floor life');
    console.log(this.tank.getBounds());

  }

  update(t) {
    // if you're out of bounds, despawn
    if (this.outOfBounds(this.tank.getBounds())) {
      console.log('dont kill');
    } else {
      for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
        this.updateOneTick();
      }
    }
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      console.log('here');
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }
}

