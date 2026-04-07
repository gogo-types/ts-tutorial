class Spc {
  public publicProperty: string;
  private privateProperty: string;
  protected protectedProperty: string;

  constructor() {
    this.publicProperty = "I am public";
    this.privateProperty = "I am private";
    this.protectedProperty = "I am protected";
  }

  showPrivate() {
    console.log(this.privateProperty);
  }
}

const example = new Spc();
console.log(example.publicProperty); // Output: I am public
example.showPrivate(); // Output: I am private
// console.log(example.privateProperty); // 에러 발생 이유: privateProperty는 private으로 선언되어 있기 때문에 클래스 외부에서 접근할 수 없습니다. 따라서 example.privateProperty에 접근하려고 하면 에러가 발생합니다.
