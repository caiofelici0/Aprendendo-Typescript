// tipos
let age: number = 5;
const firstName: string = "Caio";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = false;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Caio", "Joao"];

// tupla
const person: [number, string] = [1, "Caio"];
// lista de tuplas
const people: [number, string][] = [
  [1, "Caio"],
  [2, "Joao"],
];

// intersections
const productId: string | number | boolean = 2;

// enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = "esquerda",
}

const direction = Direction.Left;

// type assertions
const productName: any = "bone";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);
