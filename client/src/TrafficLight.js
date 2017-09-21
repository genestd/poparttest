class TrafficLight {

  constructor(){
    if (arguments.length === 0) {
      this._lightStatus = {
        greenLight: false,
        yellowLight: false,
        redLight: false
      }
    } else {
      this._lightStatus = arguments[0];
    }
  }

  updateLights(status){
    this._lightStatus = status;
    this.getLightStatus();
  }

  getLightStatus() {
    return console.log(`Light status...Green: ${this._lightStatus.greenLight}, Yellow: ${this._lightStatus.yellowLight}, Red: ${this._lightStatus.redLight}`)
  }
}

module.exports = TrafficLight;
