// callback vs EventEmiter
const EventEmiter = require('events').EventEmitter;

const programmer = new EventEmiter();

let energy = 5;
let insomniaRisk = 0;

programmer.on('drinkCoffee', function () {
  console.log('coup de fouet de la cafféine');
});

const increaseInsomnia = () => {
  insomniaRisk = insomniaRisk + 1;
  console.log(`risque d\'insomnie ${insomniaRisk}`);
};

programmer.on('drinkCoffee', function (coffe = 'Café noir') {
  console.log(`après avoir bu un ${coffe}`);
});

programmer.on('drinkCoffee', increaseInsomnia);

programmer.emit('drinkCoffee');
programmer.emit('drinkCoffee', 'café brésilien');
