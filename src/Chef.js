class Chef {
// Instantiates a chef object with name and restaurant properties
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;
  }
// Dynamically greets customer by name with appropriate message according to whether or not it's morning
  greetCustomer(customerName, isMorning) {
    var greeting = "Hello"
    if (isMorning){
      greeting = "Good morning"
    }
    return `${greeting}, ${customerName}!`;
  }
// Checks menu for food item and returns appropriate message based on whether or not it's there
  checkForFood(foodItem) {
    for (var i = 0; i < this.restaurant.menus[foodItem.type].length; i ++) {
      if (foodItem.name === this.restaurant.menus[foodItem.type][i].name) {
        return `Yes, we're serving ${foodItem.name} today!`;
      }
    }
    return "Sorry, we aren't serving " + foodItem.name + " today.";
  }
}

module.exports = Chef;
