export default class Bill {
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
