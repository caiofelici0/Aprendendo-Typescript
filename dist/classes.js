"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
// Outra maneira de criar classe
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const goodguy = new Person(1, "Caio", 21);
