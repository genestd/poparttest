class Intersection {

  constructor(){
    this._cycleLength = 120;
    this._cycleStart = null;
    this._timer = undefined;
    this._NBSBLight = {
      greenLight: false,
      yellowLight: false,
      redLight: true,
    };
    this._EBWBLight = {
      greenLight: true,
      yellowLight: false,
      redLight: false,
    };
    this._nbsbObservers = [];
    this._ebwbObservers = [];
  }

  // Northbound - Southbound Observers
  registerNBSBObserver(obj) {
    this._nbsbObservers.push(obj);
  }

  // Eastbound Westbound Observers
  registerEBWBObserver(obj) {
    this._ebwbObservers.push(obj);
  }

  updateNBSBLight(light) {
    this._nbsbObservers.forEach( (item) => {
      //console.log(item)
      item.updateLights.call(item, light);
    })
  }
  updateEBWBLight(light) {
    this._ebwbObservers.forEach( (item) => {
      item.updateLights(light);
    })
  }

  /* The intersection light cycle takes 2 minutes:
  * 1 minute Green East/West - Red North/South
  * 10 seconds Yellow East/West  - Red North South
  * 40 seconds Green North/South - Red East/West
  * 10 seconds Yellow North/South - Red East/West
  * Each Cycle we calculate the state for the elapsed time and notify our listeners
  */
  runCycle(){
    this._cycleStart = Date.now();
    this._timer = setInterval( ()=>{

      const elapsed = Math.floor((Date.now() - this._cycleStart)/1000);
      console.log(`elapsed: ${elapsed}`)
      if (elapsed >= 0 && elapsed <=60) {
        this._NBSBLight = {
          greenLight: false,
          yellowLight: false,
          redLight: true,
        };
        this._EBWBLight = {
          greenLight: true,
          yellowLight: false,
          redLight: false,
        };
        this.updateNBSBLight(this._NBSBLight);
        this.updateEBWBLight(this._EBWBLight);

      } else if (elapsed >= 61 && elapsed <=70) {
        this._NBSBLight = {
          greenLight: false,
          yellowLight: false,
          redLight: true,
        }
        this._EBWBLight = {
          greenLight: false,
          yellowLight: true,
          redLight: false,
        }
        this.updateNBSBLight(this._NBSBLight);
        this.updateEBWBLight(this._EBWBLight);

      } else if (elapsed >= 71 && elapsed <=110) {
        this._NBSBLight = {
          greenLight: true,
          yellowLight: false,
          redLight: false,
        }
        this._EBWBLight = {
          greenLight: false,
          yellowLight: false,
          redLight: true,
        }
        this.updateNBSBLight(this._NBSBLight);
        this.updateEBWBLight(this._EBWBLight);

      } else if (elapsed >= 111 && elapsed <=120) {
        this._NBSBLight = {
          greenLight: false,
          yellowLight: true,
          redLight: false,
        }
        this._EBWBLight = {
          greenLight: false,
          yellowLight: false,
          redLight: true,
        }
        this.updateNBSBLight(this._NBSBLight);
        this.updateEBWBLight(this._EBWBLight);

      } else if (elapsed > 120) {
        this._cycleStart = Date.now()
        this._NBSBLight = {
          greenLight: false,
          yellowLight: false,
          redLight: true,
        }
        this._EBWBLight = {
          greenLight: true,
          yellowLight: false,
          redLight: false,
        }
        this.updateNBSBLight(this._NBSBLight);
        this.updateEBWBLight(this._EBWBLight);
      }

    }, 1000);
  }
}

module.exports = Intersection;
