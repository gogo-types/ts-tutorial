type NowLoading = {
  state: "loading";
};

type NowFailedState = {
  state: "failed";
  code: number;
};

type NowSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// 에러 출력 switch 문 사용
function handleLoading(state: LoadingState) {
  switch (state.state) {
    case "loading":
      console.log("Loading...");
      break;
    case "failed":
      console.log(`Failed with code: ${state.code}`);
      break;
    case "success":
      console.log("✅ Success");
      console.log(`Success with title: ${state.response.title}`);
      console.log(`Duration: ${state.response.duration} seconds`);
      console.log(`Summary: ${state.response.summary}`);
      break;
  }
}

// 위 인터페이스들을 하나의 인터페이스로 만들어서 사용할 수 있다.
type LoadingState = NowLoading | NowFailedState | NowSuccessState;

// 분기 처리
const loading: LoadingState = {
  state: "loading",
};

const failed: LoadingState = {
  state: "failed",
  code: 404,
};

const success: LoadingState = {
  state: "success",
  response: {
    title: "Typescript Handle",
    duration: 10,
    summary: "Typescript Handle",
  },
};

console.log("==============================");
handleLoading(loading); // Loading...
console.log("==============================");
handleLoading(failed); // Failed with code: 404
console.log("==============================");
handleLoading(success); // ✅ Success
console.log("==============================");
