// #1. 선택적 매개변수
function greet(name: string, age?: number) {
  console.log(`Hello ${name}, ${age ?? "unknown"} years old`);
}

greet("Mike"); // age 생략 가능

// #2. 기본 매개변수
function isAdd(x: number, y: number, z: number = 3) {
  return x * y + z;
}

console.log(isAdd(5, 4)); // 5 * 4 + 3 = 23

// #3. 나머지 매개변수
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// #4. 반환 타입(Return Types)
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 4)); // 7

// #5. 함수 타입 표현식(Function Type Expressions)
let AddExpress: (x: number, y: number) => number = (x, y) => x + y;

console.log(AddExpress(5, 4)); // 9

// #6. 함수 오버로드(Function Overloads)
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any) {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello", "World")); // HelloWorld
console.log(combine(3.14, 3.25)); // 6.390000000000001
