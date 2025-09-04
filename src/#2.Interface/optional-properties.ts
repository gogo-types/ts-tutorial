interface SquareSetting {
  color?: string;
  width?: number;
  height?: number;
}

function Squarerate(config: SquareSetting): { color: string; area: number } {
  let newSquare = { color: "green", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = Squarerate({ color: "red" });

console.log(mySquare); // { color: 'red', area: 100 }
