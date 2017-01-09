import {runDuckSimulator} from './strategy/DuckSimulator';
import {WeatherStation} from './observer/WeatherStation';

/* Uncomment line to run Strategy pattern */
//runDuckSimulator();


let weatherStation = new WeatherStation();
weatherStation.run();