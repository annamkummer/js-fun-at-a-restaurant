class Chef {
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;
  }
  greetCustomer(customerName, isMorning) {
    var greeting = "Hello"
    if (isMorning){
      greeting = "Good morning"
    }
    return `${greeting}, ${customerName}!`
  }
  checkForFood(foodItem) {
    for (var i = 0; i < this.restaurant.menus[foodItem.type].length; i ++) {
      if (foodItem.name === this.restaurant.menus[foodItem.type][i].name) {
        return `Yes, we're serving ${foodItem.name} today!`
      }
    }
    return "Sorry, we aren't serving " + foodItem.name + " today."
  }
}

module.exports = Chef;
