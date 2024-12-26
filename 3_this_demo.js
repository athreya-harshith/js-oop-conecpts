let iphone = 
{
    name:"Iphone 13 pro",
    price: 100000,
    desc : "the new apple iphone ",
    rating:4.8,
    //this doesnt refer to calling context in arrow functions
    // how does this resolve ???
    // see in the next file
    display:()=>{console.log(this);}
}

let macbook = {
    name: " macbook pro",
    price: 125000,
    desc:"the new apple mackbook m2",
    rating : 4.9,
    display: function (){console.log(this);}
}

iphone.display();
macbook.display();