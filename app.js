debugger;
let item_names = ["Coffee", "Sandwich", "Cookie"];
let item_prices = [3.50, 7.99, 2.50];
let in_stock = [true, true, false];

// Get the first item name and price
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Add one new value to each array using push()
item_names.push("Muffin");
item_prices.push(3.99);
in_stock.push(true);

// Remove the last value from each array using pop()
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();
