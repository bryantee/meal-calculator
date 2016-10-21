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

// Dummy data
const bryan = new Dinner("Bryan", // 2nd param is array
  [
    {food: "hamburger", cost: 8.99},
    {food: "fries", cost: 1.5},
    {food: "coke", cost:.75},
    {food: "ice cream", cost: 3.75}
  ]
);

const jesse = new Dinner("Jesse", // 2nd param is array
  [
    {food: "chicken sandwich", cost: 9.50},
    {food: "fries", cost: 1.5},
    {food: "dr pepper", cost:.75},
    {food: "brownie a la mode", cost: 4.25}
  ]
);

console.log(`Bryan total is : ${bryan.calculateTotal()}`);
