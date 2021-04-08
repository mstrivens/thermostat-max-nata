class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.currentTemp = 10
    this.maximum_temperature = 25
    this.minimum_temperature = 10
    this.powerSave = true
  };

  currentSetting() {
    return this.temperature;
  };

  currentUsage() {
    return this.temperature < 18 ? "low-usage"
      : this.temperature <= 25 ? "medium-usage"
      : "high-usage"
      // in interface it will be green(low), black(medium), red(high)
  };

  upTemp(amount = 1) {
    if (this.temperature + amount > this.maximum_temperature) {
      return `Temperature cannot exceed ${this.maximum_temperature} degrees, it has not been increased.`;
    } else {
      return this.temperature += amount; }
  };

  downTemp(amount = 1) {
    if (this.temperature - amount < this.minimum_temperature) {
      this.temperature = 10;
      return `Temperature cannot go below ${this.minimum_temperature} degrees, it has been adjusted to 10 degrees!`;
    } else {
      return this.temperature -= amount;
    };
  };

  adjustPowerSave() {
    if (this.powerSave) {
      this.powerSave = false
      this.maximum_temperature = 32
    } else {
      this.powerSave = true
      this.maximum_temperature = 25
    }
    return this.powerSave
  };

  resetTemp() {
    return this.temperature = 20
  };
};

let thermostat = new Thermostat()
thermostat.temperature = 15

$( document ).ready(function() {

    alert( "This is an Alert!!! It's too hawt!" );

    updateTemperature();
    $('#the-current-temp').text(thermostat.currentTemp);
    adjustTempToTarget();

    $( "#up" ).click(function( event ) {
      thermostat.upTemp();
      updateTemperature();
      adjustTempToTarget();
    });

    $( "#down" ).click(function( event ) {
      thermostat.downTemp();
      updateTemperature();
      adjustTempToTarget();
    });

    $( "#reset" ).click(function( event ) {
      thermostat.resetTemp();
      updateTemperature();
      adjustTempToTarget();
    });

    $( "#ps" ).click(function( event ) {
      if (thermostat.powerSave === true) {
        thermostat.adjustPowerSave()
        $( "#powersave-logo" ).fadeOut( "slow" );
      }
      else if (thermostat.powerSave === false) {
        thermostat.adjustPowerSave()
        $( "#powersave-logo" ).fadeIn( "slow" );
      }
    });

    $( "#usage-button" ).click(function( event ) {
      if (thermostat.currentUsage() === 'low-usage') {
        $( ".display" ).removeClass(['green', 'black', 'red']).addClass( "green" );
        $('#the-usage').text("Low");
      } else if (thermostat.currentUsage() === 'medium-usage') {
        $( ".display" ).removeClass(['green', 'black', 'red']).addClass( "black" );
        $('#the-usage').text("Medium");
      } else if (thermostat.currentUsage() === 'high-usage') {
        $( ".display" ).removeClass(['green', 'black', 'red']).addClass( "red" );
        $('#the-usage').text("High");
      }
    });

    function updateTemperature() {
      $('#the-target-temp').text(thermostat.temperature);
    };

    function adjustTempToTarget() {

      if (thermostat.currentTemp < thermostat.temperature) {
        for(let i = thermostat.currentTemp ; i <= thermostat.temperature; i++) {
          delay();
          $('#the-current-temp').text(i);
          // setTimeout(function(){}, 1000);
        }
      }
    };

    function delay() {
      setTimeout(() => {
        console.log("1")
      }, 1000);
    };
});
