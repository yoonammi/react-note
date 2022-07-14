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
        {names.map(({ id, text }, index) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSalple;
