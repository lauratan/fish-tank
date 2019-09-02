class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/camerupt-mega.gif';
    this.height = 150;
    this.width = 150;
    this.position.y += this.height - 50;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    console.log(this.position);
    const seedPosition = new Vector(0, 200);
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: seedPosition,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
}
