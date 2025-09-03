declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // Error
create(false); // Error
create(undefined); // Error
