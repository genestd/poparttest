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

  setLightStatus(status){
    this._lightStatus = status;
  }

  getLightStatus() {
    return console.log(`Light status...Green: ${this._lightStatus.greenLight}, Yellow: ${this._lightStatus.yellowLight}, Red: ${this._lightStatus.redLight}`)
  }
}

module.exports = TrafficLight;
