import { useState, useEffect } from "react";
// useState는 렌더링을 일으킨다
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNicName] = useState("");

  useEffect(() => {
    // 3번째
    console.log("렌더링 완료 됐음" + name);
    // api();

    return () => {
      // 1번째
      console.log(name + "값이 바뀌기 직전에 실행");
    };
  }, [name, nickName]);

  // useEffect
  // 1. 최초 렌더링(마운트) 됐을 때 한번만 실행하고 싶을 때 => []
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
