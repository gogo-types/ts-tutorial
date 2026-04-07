interface iWindow {
  resolution(): void;
}

class Display implements iWindow {
  constructor(
    private width: number,
    private height: number,
  ) {}

  resolution() {
    console.log(`Resolution: ${this.width}x${this.height}`);
  }
}

const myScreen = new Display(3840, 2160);
myScreen.resolution(); // Output: "Resolution: 3840x2160"
