interface User {
  name: string;
  age: number;
}

interface Admin {
  role: "admin";
  permissions: string[];
}

type UserOrAdmin = User | Admin; // 위와 같은 인터페이스를 하나의 인터페이스로 만들어서 사용할 수 있다.

const userOrAdmin: UserOrAdmin = {
  name: "John",
  age: 30,
  role: "admin",
  permissions: ["read", "write"],
};

console.log(userOrAdmin); // { name: "John", age: 30, role: "admin", permissions: ["read", "write"] }
