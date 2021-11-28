const Product = require("./Class");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

var p1 = new Product(
  1,
  "Shampoo",
  "Herbal shampoo",
  10,
  25,
  "Hair Products",
  "https://moha.b-cdn.net/wp-content/uploads/2019/03/herbalShampoo200ml-1-800x800-1.jpg",
  dateTime
);
console.log("Product details are as follows: ");
console.log("Id: " + p1.id);
console.log("Name: " + p1.name);
console.log("Description: " + p1.description);
console.log("Price: ₹" + p1.price);
console.log("Stock: " + p1.stock + " Units");
console.log("Category: " + p1.category);
console.log("Image url: " + p1.image_url);
console.log("Created At: " + p1.createdAt);
console.log("Total value of inventory: ₹" + p1.inventory);
