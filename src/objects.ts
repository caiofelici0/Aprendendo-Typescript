// Type
type Order = {
  productId: number;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Caio",
  age: 20,
  email: "caio@gmail.com",
  orders: [{ productId: 1, price: 200 }],
  register() {
    return "a";
  },
};

const printLog = (message: string) => {};

printLog(user.password!);

// unions
type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Bob",
  age: 51,
  email: "bob@gmail.com",
  orders: [],
  books: ["livro 1"],
  register() {
    return "a";
  },
};

// interface
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  firstName: "Joao",
  email: "joao@gmail.com",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  firstName: "Joao",
  email: "joao@gmail.com",
  books: [],
  login() {
    return "a";
  },
};

type Grade = number | string;
const grade: Grade = 1;
