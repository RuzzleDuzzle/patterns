'use strict';

import {QuackBehavior} from './QuackBehavior';

export class Squeak extends QuackBehavior {
    constructor() {
        super();
    }

    quack() {
        console.log('Squeak!');
    }
}