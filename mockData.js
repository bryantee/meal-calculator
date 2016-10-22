import Dinner from "dinners";

// Dummy data
export const bryan = new Dinner("Bryan", // 2nd param is array
  [
    {food: "hamburger", cost: 8.99},
    {food: "fries", cost: 1.5},
    {food: "coke", cost:.75},
    {food: "ice cream", cost: 3.75}
  ]
);

export const jesse = new Dinner("Jesse", // 2nd param is array
  [
    {food: "chicken sandwich", cost: 9.50},
    {food: "fries", cost: 1.5},
    {food: "dr pepper", cost:.75},
    {food: "brownie a la mode", cost: 4.25}
  ]
);

export const thomas = new Dinner("Thomas",
  [
    {food: "oatmeal", cost: 4.5},
    {food: "iced tea", cost: 1.25},
    {food: "margarita", cost: 7.75}
  ]
)

const dinners = [bryan, jesse, thomas]

export default dinners;
