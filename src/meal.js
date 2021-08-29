function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return
  } else {
    return ingredients.push(ingredient)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(originalPrice) {
  return originalPrice * 0.9
}

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
