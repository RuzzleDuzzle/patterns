'use strict';

export class Duck {
    private quackBehavior;

    constructor() {
    }

    set setQuackBehavior(Quack) {
        if (Quack.quack) {
            this.quackBehavior = Quack;
        }
    }

    quack() {
        this.quackBehavior.quack();
    }
}