"use strict";
// tipos
let age = 5;
const firstName = "Caio";
const isValid = true;
let idk = 5;
idk = "12";
idk = false;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ["Caio", "Joao"];
// tupla
const person = [1, "Caio"];
// lista de tuplas
const people = [
    [1, "Caio"],
    [2, "Joao"],
];
// intersections
const productId = 2;
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
// type assertions
const productName = "bone";
// let itemId = productName as string;
let itemId = productName;
console.log(direction);
