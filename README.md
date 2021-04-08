# thermostat-david-jack

## Thermostat - Logic Challenge
- [x] Thermostat starts at 20 degrees
- [x] You can increase the temperature with an up function
- [x] You can decrease the temperature with a down function
- [x] The minimum temperature is 10 degrees
- [x] If power saving mode is on, the maximum temperature is 25 degrees
- [x] If power saving mode is off, the maximum temperature is 32 degrees
- [x] Power saving mode is on by default but it can also be turned off
- [x] You can reset the temperature to 20 with a reset function
- [x] You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
- [ ] (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Thermostat - Interface Challenge

- [x] Decide what HTML elements you will need to serve as controls on the thermostat.  Decide what HTML elements you will need to display the thermostat data.
- [x] Build a static HTML page with these elements, labelling them with appropriate classes and/or IDs.
- [x] You don't need to hook up your thermostat model to the user interface.  That comes in the next challenge!
- [x] Add a `script` tag to load your thermostat JavaScript file into the page.
- [x] Open the developer console and check you can instantiate a thermostat object and call methods on it.

## Thermostat - jQuery

- [x] Add jQuery to the page
- [ ] Play with jQuery
- [ ] Play with jQuery a bit more
- [ ] Go to [You Might Not Need jQuery](http://youmightnotneedjquery.com/) and see the vanilla JavaScript you would have to write. It's good to at least know that you can do it without jQuery, and to understand that it's all just JavaScript under the hood.
- [ ] Create another file that will hold your JavaScript code that manages the interface between the UI and the thermostat object.  Load the file into your HTML page.
- [ ] Hook up your buttons/links so they run the methods on the underlying thermostat model
