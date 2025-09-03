// never를 반환하는 함수는 함수에 마지막에 도달
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론
function fail() {
  return error("Something Failed!");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 있음
function infiniteLoop(): never {
  while (true) {}
}
