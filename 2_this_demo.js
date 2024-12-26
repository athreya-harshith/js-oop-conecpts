let Products = {
  arr: [
    {
      name: "Iphone",
      price: 100000,
      description: "the new apple iphone",
      rating: 4.8,
      // getCategory: function print()
      //         {
      //             console.log(this.category);
      //         }
      getCategory: () => {
        console.log(this.category);
      },
    },

    {
      name: "Macbook",
      price: 125000,
      description: "the new apple macbook m2",
      rating: 4.9,
      getCategory: function print() {
        console.log(this.category);
      },
    },
  ],
  category: "electronics",
};

// Products.arr[0].getCategory(); with function keyword (normal function )
// above call gives the this.category as undefined

Products.arr[0].getCategory();
