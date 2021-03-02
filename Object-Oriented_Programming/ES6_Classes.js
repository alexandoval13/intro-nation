// WARNING:
// The immediate following example is that of Object-Oriented Programming BEFORE ES6
// For ES6, see further below at "OOP in ES6"

function User(username, password, email, name) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.name = name;
}

const alex = new User(
  'asandyball',
  'peeyou',
  'sandyman@gmail.com',
  'Alex Sandoval'
);

const drew = new User('morningBerry', 'straw', 'gogi@yahoo.com', 'Drew Barre');

// console.log(alex, '\n', drew); // -->
// User {
//   username: 'asandyball',
//   password: 'peeyou',
//   email: 'sandyman@gmail.com',
//   name: 'Alex Sandoval'
// }
//  User {
//   username: 'morningBerry',
//   password: 'straw',
//   email: 'gogi@yahoo.com',
//   name: 'Drew Barre'
// }

// The User function above is an example of a constructor.
// A constructor is a function that is called each time an object is created (or "instantiated"). The constructor created the properties of the object and assigns them the value of the parameters passed to it.

// =======================================
// =======================================
// OOP in ES6
// =======================================

// In ES6 we can create classes!

class ClassyUser {
  constructor(username, password, email, name) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
  }
}

const dame = new ClassyUser(
  'greatDame',
  'pearl',
  'classyclass@gmail.com',
  'Dame Manchego'
);

const marshall = new ClassyUser(
  'therealeminem',
  'chocisgarb',
  'mtothem@aol.com',
  'Marshall Matters'
);

// console.log(dame, '\n', marshall); // -->
// ClassyUser {
//   username: 'greatDame',
//   password: 'pearl',
//   email: 'classyclass@gmail.com',
//   name: 'Dame Manchego'
// }
//  ClassyUser {
//   username: 'therealeminem',
//   password: 'chocisgarb',
//   email: 'mtothem@aol.com',
//   name: 'Marshall Matters'
// }

/**
 * The class function basically creates a template that we can use to create objects later. The constructor() method is a special method called when an instance of the ClassyUser class is created.
 */

// Class methods can be defined as follows:

class ClassyUserWithMethods {
  constructor(username, password, email, name) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
  }
  updatePassword(newPW) {
    this.password = newPW;
  }
}

const adono = new ClassyUserWithMethods(
  'yes_andNo',
  'pw',
  'email@email.com',
  'Adono Mann'
);

console.log(adono); // -->:
// ClassyUserWithMethods {
//   username: 'yes_andNo',
//   password: 'pw',
//   email: 'email@email.com',
//   name: 'Adono Mann'
// }

adono.updatePassword('newpw');

console.log(adono); // -->:
// ClassyUserWithMethods {
//   username: 'yes_andNo',
//   password: 'newpw',
//   email: 'email@email.com',
//   name: 'Adono Mann'
// }
