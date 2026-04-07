abstract class AbstractClass {
  abstract method(): number;
}

class Circle extends AbstractClass {
  constructor(private radius: number) {
    super();
  }

  method() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.method()); // Output: 78.53981633974483
