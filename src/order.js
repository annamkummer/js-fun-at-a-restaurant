// Adds up to 3 orders to a deliveryOrders array
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

// Removes any elements in the deliveryOrders array with an order number equaling orderNum
function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
    }
  }
}

// 1) Pulls out the item property from each element in the deliveryOrders array
// 2) Pushes those items into an array
// 3) Returns the item elements as a string type list
function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i ++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ")
}

// Searches through the item properties of the deliveryOrders elements and returns true if any match orderItem, false if none match
function searchOrder(deliveryOrders, orderItem) {
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].item === orderItem) {
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
