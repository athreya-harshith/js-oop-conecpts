class Product
{
    #name;// private
    // price;
    // description;

    constructor(n,p,d)
    {
        this.#name = n;
        this.price = p;
        this.description = d;
       
        // return this;// its an optional . it is automatically
    }

    display()
    {
        // print the product
        console.log(this.#name,this.price,this.description);
    }
}

const p = new Product("Iphone ", 10000,"brand new Iphone 13 pro");
console.log(p);// while printing we arent able to see name 
p.name = -1;// this is property of an object in js to add the key value to last , however from this original name is not hampered
console.log(p);
p.display();// we can see the actual name here