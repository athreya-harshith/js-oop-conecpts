class Product {
  name;
  description;
  price;
  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
  }
}
const obj = new Product("Iphone 15", "Brand new iphone", 10000);
console.log(obj);
console.log(obj.__proto__);
