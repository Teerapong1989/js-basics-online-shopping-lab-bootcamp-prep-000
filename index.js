var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var newItem = {itemName: itemName, itemPrice: itemPrice}
 getCart().push(newItem)
 
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  var newCartItem = new arry() 
  for(var item in cart){
    newCartItem.push(`${cart[item]})
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
