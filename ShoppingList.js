const EventEmiter = require('events').EventEmitter;

class ShoppingList extends EventEmiter {
  constructor() {
    super();
    this.list = [];
  }

  add(item) {
    this.list = [...this.list, item];
    this.emit('added', this.list);

    if (item.includes('surgelé')) {
      this.emit('bringFreezerBag', 'le sac rouge');
    }
  }
}

module.exports = ShoppingList;
