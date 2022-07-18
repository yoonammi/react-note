import { useState } from "react";

const IterationSalple = () => {
  const [text, setText] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "구름" },
  ]);
  const [nextId, setNextId] = useState(5);

  const handleClick = () => {
    // names.push(text);
    if (!text) return; // early return

    const nextNames = [...names, { id: nextId, text }];
    setNames(nextNames);
    setText("");
    setNextId(nextId + 1);
  };

  const handleDelete = (deleteId) => {
    const nextNames = names.filter((e, i) => {
      //filter : names에서 true인 애들만 리턴해서 nextNames에 넣어준다
      return deleteId !== e.id;
    });
    // alert(index);
    setNames(nextNames);
  };

  return (
    <>
      <div>
        <input
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>추가</button>
      </div>
      <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
      <ul>
        {names.map(
          (
            { id, text },
            index //{names.map ~ : jsx로 만들어진 배열이 됨
          ) => (
            <li key={id} onDoubleClick={() => handleDelete(id)}>
              {text}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default IterationSalple;

// <li key={id}  ===> 이 key 값을 기준으로 바뀔 렌더링과 현재를 비교한다 그래서 키값을 안주거나 겹치는 값을 주게 되면 다시 렌더링을 할때 꼬이게 됨
