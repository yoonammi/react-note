import { useReducer } from "react";

function reducer(state, action) {
  // reducer의 특징: switch문을 사용
  switch (action.type) {
    case "INCREMENT": // 스트링 상수이기 때문에 대문자 사용
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // (reducer, { value: 0 }) : 첫번째 인자에 reducer 등록, 두번째 인자는 초기값
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>+1</button>
    </div>
  );
};

export default Counter3;

// reducer
// useState보다 좀더 고차원의 셋함수를 만들 수 있게 된다
