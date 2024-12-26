let iphone = {
  name: "Iphone 13 pro",
  price: 100000,
  desc: "the new apple iphone ",
  rating: 4.8,

  // display: function () {
  //   let iphoneRed = {
  //     name: "Iphone Red",
  //     price: 110000,
  //     print: () => {
  //       console.log(this);
  //     },
  //   };

  //   iphoneRed.print();
  // },
  display: () => {
    let iphoneRed = {
      name: "Iphone Red",
      price: 110000,
      print: () => {
        console.log(this);
      },
    };

    iphoneRed.print();
  },
};

iphone.display();
// console.log(iphone);
// here lexical scope resolution happens
// this in print() funcn , checks whether the one scope above it has any idea of this ?
// the scope is display(), it has this which is iphone, hence its printed
// if the display is a arrow fucntion then that would lead to undefined as its resloved ultimately to global scope
// and the global scope here dont know about any this hence it returns a empty object
