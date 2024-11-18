/**
 In programming the purpose of inheritance is to take something and extend.
  This property of javascript help us to extendt he behavior from other object.
  When you search for a property from and object and it does not exist, javascript automatically take it from the prototype
 * */

const animal = {
  eat: true,
};

const cat = {
  name: "tracy",
  age: 1,
  color: "black",
};

Object.setPrototypeOf(cat, animal);
console.log(cat);
console.log((cat as any).eat);
