'use strict';

export class Duck {
  constructor() {

  }

  set setQuackBehavior(Quack) {
    if (Quack.quack) {
      this.quackBehavior = Quack;
    }
  }

  set setFlyBehavior(Fly) {
    if (Fly.fly) {
      this.flyBehavior = Fly;
    }
  }

  quack() {
    if (this.quackBehavior) {
      this.quackBehavior.quack();
    } else {
      console.log('no Quack Behavior');
    }
  }

  fly() {
    if (this.flyBehavior) {
      this.flyBehavior.fly();
    } else {
      console.log('no Quack Behavior');
    }
  }
}