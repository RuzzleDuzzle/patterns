import {FlyBehavior} from "./FlyBehavior";


export class Fly extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log('Really flying!');
  }
}