let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(myAdd(3, 4));

let mySub: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x - y;
};

console.log(mySub(5, 4)); // 1
