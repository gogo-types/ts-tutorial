function add(x: number, y: number): number {
  return x + y; // number 추론
}

let Add = function (x: number, y: number): number {
  return x + y; // number 주론
};

function num(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 4)); // 7
console.log(Add(3, 5)); // 8

console.log(num(3.14, 2.4)); // 5.54
