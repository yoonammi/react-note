import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useInputs = (initialForm) => {
  // 초기값을 받아서 useReducer를 정리한다
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
};

export default useInputs;

/*

커스텀 훅:
- 자주쓰는 여러 컴퍼넌트에서 동일한 훅을 활용한 코드를 쓰면
고대로 복사해서 다른 컴포넌트에서도 가져다 써야하는데
이거 말고 코드를 반복하지 않고 따로 훅을 사용한 코드를 따로 빼서
재활용 하는것.
- 훅을 사용한 공용함수.
- 커스텀 훅은 자주 사용하는 코드인데 훅을 사용하고 있으면 커스텀 훅이고 앞에 use가 붙는다

커스텀 훅은 훅들처럼 파일 이름에 use를 붙인다

Info2의 useReducer 를 다른 컴포넌트에서 간단하게 쓸 수 있도록 커스텀 훅으로 만들어보자
-> hooks폴더의 useInputs.js 파일 만듦


*/
