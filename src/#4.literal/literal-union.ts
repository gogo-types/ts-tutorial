type StarCraft = "zerg" | "terran" | "protoss";

function play(select: StarCraft) {
  console.log(`You selected: ${select}`);
}

play("zerg"); // Valid
play("terran"); // Valid
play("protoss"); // Valid
// play("orc"); // Error: Argument of type '"orc"' is not assignable to parameter of type 'StarCraft'.
