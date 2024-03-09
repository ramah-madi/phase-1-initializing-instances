// Write your code here
// Class for Breakfast
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Class for Lunch
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Class for Dinner
class Dinner {
  #dessert;

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

// Example usage
const breakfast = new Breakfast("Oatmeal", "Orange Juice");
const lunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
const dinner = new Dinner("Green Salad", "Lentil Soup", "Grilled Salmon", "Chocolate Cake");

console.log(breakfast);
console.log(lunch);
console.log(dinner);