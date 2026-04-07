class GetterSetter {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue: number) {
    this._value = newValue;
  }
}

const accessor = new GetterSetter(10);
console.log(accessor.value); // Output: 10
accessor.value = 20;
console.log(accessor.value); // Output: 20
