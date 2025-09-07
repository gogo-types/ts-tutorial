// 가명 함수
function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // 7

// 익명 함수
let multiply = function (x, y) {
  return x * y;
};

console.log(multiply(3, 4)); // 12

let z = 200;
function addToz(x, y) {
  return x + y + z;
}

console.log(addToz(3, 4)); // 3 + 4 + z
