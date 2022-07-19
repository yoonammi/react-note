import { useState, useEffect } from "react";
// useState는 렌더링을 일으킨다
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNicName] = useState("");

  useEffect(() => {
    // 인자: (함수, 배열)
    // 3번째 실행
    console.log("렌더링 완료 됐음" + name);
    // api();

    return () => {
      // 클린업 함수
      // 1번째 실행
      console.log(name + "값이 바뀌기 직전에 실행");
    };
  }, [name, nickName]);

  // useEffect
  // 1-1. 최초 렌더링(마운트) 됐을 때 한번만 실행하고 싶을 때 => []
  // 1-2. 빈 배열의 클린업 함수는 이 Info컴포넌트가 제거될 때, 수명을 다할() 때 그 직전에 한번 실행된다
  // 2. 어떤 상태가 바뀔 때 마다 함수를 실행하고 싶을 때 => [name, nickName]

  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setNicName(e.target.value)} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>
    </>
  );
};

export default Info;
