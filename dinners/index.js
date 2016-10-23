'use strict';

// Class objects (can't export modules in current version node)
class Dinner {
  constructor(name, dishes) {
    this.name = name;
    this.dishes = dishes;
  }
  calculateTotal() {
    let dinnerTotal = 0;
    const dishes = this.dishes;
    for (var i = 0; i < dishes.length; i++) {
      dinnerTotal += dishes[i].cost;
    }
    return dinnerTotal;
  }
  calculateTax() {
    const TAX_RATE = .08;
    const dinnerTotal = this.calculateTotal();
    return parseFloat(dinnerTotal * TAX_RATE).toFixed(2);
  }
  calculateTip() {
    // tip calculated before tax
    const TIP_RATE = .15;
    const dinnerTotal = this.calculateTotal();
    return parseFloat(dinnerTotal * TIP_RATE).toFixed(2);
  }
}

module.exports = Dinner;
