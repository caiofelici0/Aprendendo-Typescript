const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello");
const count = returnValue<number>(5);

function getFirstValueFromArray<T>(array: T[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Promises
const returnPromise = async (): Promise<number> => {
  return 5;
};

// Classes
class Generic<T> {
  zeroValue: T;
  multi: (x: T, y: T) => T;

  constructor(zeroValue: T, multi: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.multi = multi;
  }
}

const genericNumber = new Generic<number>(0, (x: number, y: number) => {
  return x * y;
});
