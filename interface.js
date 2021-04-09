let thermostat = new Thermostat()

$( document ).ready(function() {

    $('#weather').text($.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data){console.log(data.main.temp);}))

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
          delay(i);
          // $('#the-current-temp').text(i);
          // setTimeout(function(){}, 1000);
        }
      }
    };

    function delay(i) {
      setTimeout(() => {
      $('#the-current-temp').text(i)
    }, 5000);
    };
});
