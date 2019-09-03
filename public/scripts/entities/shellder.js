class Shellder extends FloorLife {
  constructor(options) {
    super(options);
    this.imageUri = '/images/shellder.gif';
    this.height = 50;
    this.width = 50;
    this.position.y += this.height - 50;
  }
}