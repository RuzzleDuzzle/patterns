import {FlyBehavior} from "./FlyBehavior";

export class NoFly extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log('Just pretending to fly');
  }
}