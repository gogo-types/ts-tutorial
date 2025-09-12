type MoveMent = "Attack" | "Defend" | "Exit";

function Literal(direction: MoveMent) {
  console.log(`You chose to ${direction}`);
}

Literal("Attack"); // Valid
Literal("Defend"); // Valid
Literal("Exit"); // Valid
// Literal("Run"); // Error: Argument of type '"Run"' is not assignable to parameter of type 'MoveMent'.
