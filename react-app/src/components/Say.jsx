import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // message초기값은 빈""값
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");
  console.log("렌더링"); // 가상돔이어서 렌더링을 여러번 할 필요가 없어서 계속은 안찍힘

  const [color, setColor] = useState("black");

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </>
  );
};

export default Say;

// 방식1:  onClick={() => 함수()} 익명함수를 넣음 => 자바스크립트 코드 전달이 아니라 함수를 전달하는 방식(jxs를?)
// 방식2:  onClick={함수}
