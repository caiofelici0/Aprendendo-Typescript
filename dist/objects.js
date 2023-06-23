"use strict";
const user = {
    firstName: "Caio",
    age: 20,
    email: "caio@gmail.com",
    orders: [{ productId: 1, price: 200 }],
    register() {
        return "a";
    },
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    firstName: "Bob",
    age: 51,
    email: "bob@gmail.com",
    orders: [],
    books: ["livro 1"],
    register() {
        return "a";
    },
};
const emailUser = {
    firstName: "Joao",
    email: "joao@gmail.com",
    login() {
        return "a";
    },
};
const newAuthor = {
    firstName: "Joao",
    email: "joao@gmail.com",
    books: [],
    login() {
        return "a";
    },
};
const grade = 1;
