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

function addMenuItem(restaurant, menuItem) {
  for (var i = 0; i <= restaurant.menus[menuItem.type].length; i++) {
    if (menuItem === restaurant.menus[menuItem.type][i]) {
    return
    }
  }
  return restaurant.menus[menuItem.type].push(menuItem)
}

function removeMenuItem(restaurant, menuItemName, itemType) {
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (menuItemName === restaurant.menus[itemType][i].name) {
      restaurant.menus[itemType].splice(i, 1)
      return `No one is eating our ${menuItemName} - it has been removed from the ${itemType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
