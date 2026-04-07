class ReadOnly {
  readonly readonlyProperty: string;

  constructor(name: string) {
    this.readonlyProperty = name;
  }
}

const readonly = new ReadOnly("James");

console.log(readonly.readonlyProperty); // Output: James
// console.log(readonly.readonlyProperty = "John"); // 에러 발생 이유: readonlyProperty는 readonly로 선언되어 있기 때문에 값을 변경할 수 없습니다. 따라서 readonly.readonlyProperty에 새로운 값을 할당하려고 하면 에러가 발생합니다.
