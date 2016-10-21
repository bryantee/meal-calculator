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

class Bill {
  constructor(dinners) {
    this.dinners = dinners; // array of dinners
  }
  printTotal() {
    let dinnerTotal = 0;
    const dinners = this.dinners;
    dinners.forEach( dinner => {
      dinnerTotal += +dinner.calculateTotal();
      dinnerTotal += +dinner.calculateTax();
    });
    console.log(`The total bill will be: $${dinnerTotal}`);
  }
  printTips() {
    let tipTotal = 0;
    const dinners = this.dinners;
    dinners.forEach( dinner => {
      tipTotal += +dinner.calculateTip();
    });
    console.log(`The total tip on the bill will be: $${tipTotal}`);
  }
  printBreakdown() {
    const dinners = this.dinners;
    dinners.forEach( dinner => {
      console.log(dinner.name.toUpperCase());
      console.log(`Total: $${dinner.calculateTotal()}`);
      console.log(`Tax: $${dinner.calculateTax()}`);
      console.log(`Tip: $${dinner.calculateTip()}`);
    });
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

const thomas = new Dinner("Thomas",
  [
    {food: "oatmeal", cost: 4.5},
    {food: "iced tea", cost: 1.25},
    {food: "margarita", cost: 7.75}
  ]
)

const dinners = [bryan, jesse, thomas];

const theBill = new Bill (dinners);

theBill.printTotal();
theBill.printTips();
theBill.printBreakdown();
