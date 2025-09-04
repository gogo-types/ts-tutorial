function printInt(IntObj: { Int: string }) {
  console.log(IntObj.Int);
}

let mySize = { size: 10, Int: "Size 10 Interface" };
printInt(mySize); // Size 10 Interface

interface LabeledValue {
  Int: string;
}

function LabelInt(IntObj: LabeledValue) {
  console.log(IntObj.Int);
}

let myLabel = { size: 10, Int: "Size 20 Inter" };
printInt(myLabel); // Size 20 Inter
