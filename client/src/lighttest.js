const TrafficLight = require('./TrafficLight');
const Intersection = require('./Intersection');

let nb1 = new TrafficLight();
let sb1 = new TrafficLight();
let eb1 = new TrafficLight();
let wb1 = new TrafficLight();

let waterAndThird = new Intersection();

waterAndThird.registerNBSBObserver(nb1);
waterAndThird.registerNBSBObserver(sb1);
waterAndThird.registerEBWBObserver(eb1);
waterAndThird.registerEBWBObserver(wb1);

waterAndThird.runCycle();
