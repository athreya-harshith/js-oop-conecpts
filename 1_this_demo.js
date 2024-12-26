let iphone = 
{
    name:"Iphone 13 pro",
    price: 100000,
    desc : "the new apple iphone ",
    rating:4.8,

    display()
    {
        console.log("first display ",this);
    }
}

let macbook = {
    name: " macbook pro",
    price: 125000,
    desc:"the new apple mackbook m2",
    rating : 4.9,

    display()
    {
        console.log("second display ",this);
    }
}

iphone.display();

macbook.display();

console.log(this);