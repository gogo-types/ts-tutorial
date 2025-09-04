interface Shape {
  color: string;
}

interface PenSide {
  penSide: number;
}

interface Square extends Shape, PenSide {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penSide = 20;

console.log(square);
