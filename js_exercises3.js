const cart = [
  { item: "apple", price: 1.5, quantity: 2 },
  { item: "banana", price: 1.2, quantity: 5 },
  { item: "orange", price: 1.8, quantity: 3 },
];

// Calculate total price using reduce
const totalPrice = cart.reduce((total, currentItem) => {
  return total + currentItem.price * currentItem.quantity;
}, 0);

console.log("Total Price:", totalPrice);
