/**
 * Resources:
 * https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a
 *
 */

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

/**
 * Classes can also contain static methods
 *
 * What is a static method?
 *  It is a function that is bound to the class, not an object...
 * This means that the static method CANNOT be called from an instance of the class
 *
 * The following is an example:
 */

class UserWithStaticMethod {
  constructor(username, password, email, name) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
  }
  updatePassword(newPW) {
    this.password = newPW;
  }
  static staticMethod() {
    console.log('I am a static method');
  }
}

const lonely = new UserWithStaticMethod(
  'lonely_guy',
  'saveme',
  'chillin@hotmail.com',
  'Tom A. Hawk'
);

lonely.updatePassword('lovewins'); // -->
// ClassyUserWithMethods {
//   username: 'yes_andNo',
//   password: 'pw',
//   email: 'email@email.com',
//   name: 'Adono Mann'
// }

// lonely.staticMethod(); // --> ERROR

// UserWithStaticMethod.staticMethod(); // --> I am a static method

/**
 * Now for getters and setters
 *
 * One of the core concepts of OOP is encapsulation.
 * Encapsulation is the idea that data (object properties) should not be accessed or modified from outside the object.
 *
 * So, we would use...
 * - getter, to access
 * - setter, to modify
 * They are specific methods we define in our class
 */

class UserSetAndGet {
  constructor(name, age, email) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

const jeff = new UserSetAndGet('Jeff', 30, 'jeff@jiffy.com');
console.log(jeff);
console.log(jeff.name);
jeff.name = 'Jim';
console.log(jeff.name);
console.log(jeff);

/**
 * Inheritance:
 *
 * Classes can inherit from other classes (parent-child).
 *
 */

class ParentUser {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class ChildUser extends ParentUser {
  constructor(name, age, sport) {
    super(name, age);
    this._sport = sport;
  }
  get sport() {
    return this._sport;
  }
  set sport(newSport) {
    this._sport = newSport;
  }
}

const kiddo = new ChildUser('Sarra', 10, 'soccer');
console.log(kiddo);
console.log(kiddo.name);
console.log(kiddo.sport);

// The important things to note about inheriting
