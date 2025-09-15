// 교차 타입(Intersection Types)

interface ErrorHandler {
  fail: boolean;
  error?: { message: string };
}

interface WorkData {
  work: { title: string }[];
}

interface Handler {
  handlers: { name: string }[];
}

// 위 인터페이스들을 하나의 인터페이스로 만들어서 사용할 수 있다.
type HandlerResponse = Handler & ErrorHandler;
type WorksResponse = Handler & ErrorHandler;

const errorHandlerResponse = (response: WorksResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.handlers);
};

// 에러 출력
// errorHandlerResponse({ fail: true, error: { message: "error" } }); // 에러 출력
// 성공 출력
errorHandlerResponse({ fail: false, handlers: [{ name: "handler" }] });
