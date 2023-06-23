interface IPerson {
  id: number;
  getName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string; // acessivel pelo classe e pelas subclasses
  private age: number; // acessivel somente pela classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

// Outra maneira de criar classe
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  // getAge(): number {
  //   return this.age;
  // }
}

const goodguy = new Person(1, "Caio", 21);
