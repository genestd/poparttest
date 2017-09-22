const TrafficLight = require('./TrafficLight');
const Intersection = require('./Intersection');

let nb1 = new TrafficLight('Northbound Light');
let sb1 = new TrafficLight('Southbound Light');
let eb1 = new TrafficLight('Eastbound Light');
let wb1 = new TrafficLight('Westbound Light');

let firstAndMain = new Intersection();

firstAndMain.registerNBSBObserver(nb1);
firstAndMain.registerNBSBObserver(sb1);
firstAndMain.registerEBWBObserver(eb1);
firstAndMain.registerEBWBObserver(wb1);

firstAndMain.runCycle();
