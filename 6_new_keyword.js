class Product
{
    // name;
    // price;
    // description;

    // even if the properties or data members are not there
    // this.name = n; creates a new key value pair and adds to the object
    // its like 
    //  obj = {}
    // obj.x = 10;
    // obj.y = 20;
    constructor(n,p,d)
    {
        this.name = n;
        this.price = p;
        this.description = d;
        //return 10;// returning premitives has no effect as consructors are meant to return object
        //return {};// it has effect as it is returning object which is non premitive

        return this;// its an optional . it is automatically
    }
    // constructor()
    // {
    //     return this;
    // }
    // SyntaxError: A class may only have one constructor
    display()
    {
        // print the product
    }
}

const p = new Product("Iphone ", 10000,"brand new Iphone 13 pro");
console.log(p);