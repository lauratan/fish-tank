class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/sharpedo-mega.gif'; // Set the image
    this.height = 100;
    this.width = 100;
  }
}
