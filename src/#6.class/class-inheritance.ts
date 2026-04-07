class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  berk() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Fido");
dog.berk(); // Output: Fido is barking.
