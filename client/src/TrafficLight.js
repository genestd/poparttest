class TrafficLight {

  constructor(){
    if (arguments.length === 0) {
      this._name = 'TrafficLight'
    } else {
      this._name = arguments[0]
    }
    //default status = red
    this._lightStatus = {
      greenLight: false,
      yellowLight: false,
      redLight: true
    }
  }

  updateLights(status){
    this._lightStatus = status;
    this.getLightStatus();
  }

  getLightStatus() {
    return console.log(`${this._name} status...Green: ${this._lightStatus.greenLight}, Yellow: ${this._lightStatus.yellowLight}, Red: ${this._lightStatus.redLight}`)
  }
}

module.exports = TrafficLight;
