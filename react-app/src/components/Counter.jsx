import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  // let number = 0; //값이 아무리 바뀌어도 변화가 출력되지 않는다.
  const handleClick = () => {
    setNumber(number + 1); // set함수는 비동기 함수
    //number += 1;
    console.log(number); // 누르기 전에 콘솔로그가 먼저 실행됨
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
