function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return
  } else {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
    deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i ++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ")
}

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
