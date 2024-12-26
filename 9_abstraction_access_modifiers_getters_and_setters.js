class Product
{
    #name;// private
    #price;
    // description;

    constructor(n,p,d)
    {
        this.#name = n;
        this.#price = p;
        this.description = d;
    }

    // setName(n)
    // {
    //     if(typeof(n) !='string')
    //     {
    //         console.log("invalid name");
    //         return;
    //     }
    //     this.#name= n;
    // }
    // setPrice(p)
    // {
    //     if(p<0) return;
    //     this.#price = p;
    // }

    // getName()
    // {
    //     return this.#name;
    // }

    // getPrice()
    // {return this.#price;}
    set setName(n)
    {
        if(typeof(n) !='string')
        {
            console.log("invalid name");
            return;
        }
        this.#name= n;
    }

    set setPrice(p)
    {
        if(p<0) return;
        this.#price = p;
    }

    get getName()
    {
        return this.#name;
    }

    get getPrice()
    {return this.#price;}
    display()
    {
        // print the product
        console.log(this.#name,this.price,this.description);
    }
}

const p = new Product("Iphone ", 10000,"brand new Iphone 13 pro");
console.log(p);// while printing we arent able to see name 
// p.setName(-1);
p.setName = -1;
console.log(p.getName);
p.setName = "Iphone 13 Pro";
console.log(p.getName);