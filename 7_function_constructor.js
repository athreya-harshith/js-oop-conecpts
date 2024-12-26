function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;

  this.display = function () {
    console.log(this);
  };
  return this; //its optional
}

const p = new Product("bag", 100000, "cool new bag"); // here the calling context is new hence it acts as functionConstructor
const q = Product("bag", 100000, "cool new bag"); //here the calling context is global hence the this is resolved lexically
// the name , price are added to global this object
console.log(p);
console.log(this);
console.log("Q", q);
