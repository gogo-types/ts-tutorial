type statusCode = 200 | 400 | 404 | 500;

function response(code: statusCode) {
  console.log(`상태 코드: ${code}`);
}

response(200); // Valid
response(400); // Valid
// response(5000); // Error: Argument of type '5000' is not assignable to parameter of type 'statusCode'.
