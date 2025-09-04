interface Move {
  readonly Up: string;
  readonly Down: string;
}

let move: Move = { Up: "Up", Down: "Down" };
console.log(move.Up); // Up
console.log(move.Down); // Down
// console.log(move.Left); // Error

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = 4;
// ro[0] = 24; // error
// ro.push(5); // error
// ro.length = 200; // error
// a = ro; // error
