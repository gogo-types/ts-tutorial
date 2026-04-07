interface Window {
  resolution(): void;
}

class Screen implements Window {
  constructor(
    private width: number,
    private height: number,
  ) {}

  resolution() {
    console.log(`Resolution: ${this.width}x${this.height}`);
  }
}

const screen = new Screen(3840, 2160);
screen.resolution(); // Output: "Resolution: 3840x2160"
