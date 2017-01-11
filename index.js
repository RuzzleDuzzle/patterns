import {runDuckSimulator} from './strategy/DuckSimulator';
import {WeatherStation} from './observer/WeatherStation';
import {StarBuzzCoffee} from "./decorator/StarBuzzCoffee";

/* Uncomment line to run Strategy pattern */
//runDuckSimulator();

/* Uncomment line to run Observer pattern */
// let weatherStation = new WeatherStation();
// weatherStation.run();

StarBuzzCoffee.run();