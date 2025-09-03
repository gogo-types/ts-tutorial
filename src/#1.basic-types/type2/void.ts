function warnUSer(): void {
  console.log("Hello This is user Message");
}

warnUSer(); // Hello This is user Message

let unusable: void = undefined;

unusable = null; // 성공 `--strictNullChecks` false 시 strict 부분
