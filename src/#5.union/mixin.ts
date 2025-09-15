// 교차를 통한 믹스인

class User {
  constructor(public name: string) {}
}

interface Logger {
  log(name: string): void; // 로그 출력
}

class ConsoleLogger implements Logger {
  log(name: string) {
    console.log(`User ${name} Logged in`);
  }
}

// 두 객체를 받아서 하나로 조합할 수 있다.
class mixin extends User implements Logger {
  log(name: string) {
    console.log(`User ${name} Logged in`);
  }
}

const jim = new mixin("John");
jim.log(jim.name); // User John Logged in
