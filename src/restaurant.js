// Generates a restaurant object that takes in a name value and nests breakfast, lunch, and dinner arrays under a menus property
function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner:[]
    }
  }
}

// Dynamically adds menu items to the appropriate menus array without repeating menu items
function addMenuItem(restaurant, menuItem) {
  for (var i = 0; i <= restaurant.menus[menuItem.type].length; i++) {
    if (menuItem === restaurant.menus[menuItem.type][i]) {
    return
    }
  }
  return restaurant.menus[menuItem.type].push(menuItem);
}

// 1) Searches through menu item names for a match with menuItemName
// 2) If it exists, the menu item is removed and a removal message is returned
// 3) If it does not exist, an add message is returned
function removeMenuItem(restaurant, menuItemName, itemType) {
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (menuItemName === restaurant.menus[itemType][i].name) {
      restaurant.menus[itemType].splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${itemType} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
