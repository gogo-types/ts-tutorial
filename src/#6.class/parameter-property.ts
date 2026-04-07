class ParameterProperty {
  constructor(
    public name: string,
    private age: number,
  ) {}
}

const person = new ParameterProperty("Alice", 30);
console.log(person.name); // Output: Alice
// console.log(person.age); // 에러: 'age'는 private이므로 클래스 외부에서 접근할 수 없습니다.
