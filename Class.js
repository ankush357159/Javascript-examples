class Product {
  constructor(
    id,
    name,
    description,
    price,
    stock,
    category,
    image_url,
    createdAt
  ) {
    this.id = id;
    (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.stock = stock),
      (this.category = category),
      (this.image_url = image_url),
      (this.createdAt = createdAt);
  }
  //Getter
  get inventoryValue() {
    return this.totalPrice();
    //return this.price * this.stock;
  }

  // Method;
  totalPrice() {
    return this.price * this.stock;
  }
}

module.exports = Product;
