const calculateSubtotal = (items) => {
    return items.reduce((ass, item) => ass + item.price * item.quantity , 0);
}
const calculateDiscount = (subtotal, discountPercent) => {
    return (subtotal * discountPercent) / 100;
}
const calculateTax = (amountAfterDiscount, taxPercent) => {
    return (amountAfterDiscount * taxPercent) / 100;
}
const createCartSummary = (items, discountPercent, taxPercent) => {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;

  return {
    subtotal,
    discount,
    tax,
    total
  };
};

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];
console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
