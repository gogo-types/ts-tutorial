type isActive = true | false;

function CheckStatus(status: isActive) {
  console.log(`Status is ${status}`);
}

CheckStatus(true); // Valid
CheckStatus(false); // Valid
// CheckStatus("true"); // Error: Argument of type '"true"' is not assignable to parameter of type 'isActive'.
