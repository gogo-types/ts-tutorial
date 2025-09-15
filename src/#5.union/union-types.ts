function Union(value: string | number | boolean) {
  console.log(value);
}

Union("Hello"); // valid
Union(123); // valid
Union(true); // valid

// Union(123.456); // Error: Argument of type 'number' is not assignable to parameter of type 'string | number | boolean'.
