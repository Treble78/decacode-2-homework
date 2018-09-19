const User = require('./user.class');
const Admin = require('./admin.class');

const person_1 = new User('Egor','Tukhmenev');
const person_2 = new Admin('Mr','Admin');

person_1.LogIn();
person_2.LogIn();

console.log (person_1);
console.log (person_2);