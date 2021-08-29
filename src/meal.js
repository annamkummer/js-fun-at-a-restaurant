// Labels any food input "Delicious"
function nameMenuItem(food) {
  return `Delicious ${food}`;
}

// Generates a dynamic menu item object with properties name, price, and type
function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
}

// Adds unique ingredients to an array
function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return
  } else {
    return ingredients.push(ingredient);
  }
}

// Puts a $ in front of the original price
function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

// Decreases the original price by 10%
function decreasePrice(originalPrice) {
  return originalPrice * 0.9;
}

// Generates a recipe object with properties title, ingredients, and type
function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
