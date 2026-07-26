# Cart Total Calculator

A simple JavaScript project that calculates a shopping cart summary using small reusable functions.

## Features

- Calculate cart subtotal
- Calculate discount amount
- Calculate tax after discount
- Calculate final total
- Return a summary object with all results

How It Works
Calculate the subtotal from all cart items
Apply the discount to the subtotal
Calculate tax on the discounted amount
Add tax to get the final total

## Functions

### `calculateSubtotal(items)`
Adds `price * quantity` for every item in the cart.

### `calculateDiscount(subtotal, discountPercent)`
Returns the discount amount based on the subtotal.

### `calculateTax(amountAfterDiscount, taxPercent)`
Returns the tax amount after the discount is applied.

### `createCartSummary(items, discountPercent, taxPercent)`
Returns an object containing:

- `subtotal`
- `discount`
- `tax`
- `total`




