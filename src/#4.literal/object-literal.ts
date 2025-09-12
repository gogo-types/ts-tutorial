type Pack = {
  juice: "apple" | "strawberry" | "banana";
  package: "small" | "medium" | "Large";
};

const pickA: Pack = { juice: "apple", package: "Large" };

console.log(pickA); // { juice: 'apple', package: 'Large' }
