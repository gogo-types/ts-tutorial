class ECMAScript {
  #privateField: string;

  constructor() {
    this.#privateField = "I am private";
  }

  getPrivateField() {
    return this.#privateField;
  }
}

const e = new ECMAScript();
console.log(e.getPrivateField()); // Output: I am private
// console.log(e.#privateField); // 에러 발생 이유: #privateField는 private으로 선언되어 있기 때문에 클래스 외부에서 접근할 수 없습니다. 따라서 e.#privateField에 접근하려고 하면 에러가 발생합니다.
