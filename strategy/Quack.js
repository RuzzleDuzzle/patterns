'use strict';

import {QuackBehavior} from './QuackBehavior';

export class Quack extends QuackBehavior {
    constructor() {
        super();
    }

    quack() {
        console.log('Quack!');
    }
}