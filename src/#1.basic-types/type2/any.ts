let allday: any = 4;
allday = new Date(2025, 9, 3);
allday = false;
allday = "Hello";

let notSure: any = 4;
notSure.ifItExists(); // true 런타임에 존재할 확률 O
notSure.toFixed(); // true 존재하나 컴파일러는 검사 X

let prettySure: Object = 4;
// prettySure.toFixed(); // 오류: 'toFixed'는 'Object' 에 존재 X
