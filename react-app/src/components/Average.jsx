import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const inputEl = useRef(null); // null : 개발자가 의도적으로 빈값을 넣어둠
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus(); // dom함수를 쓸 수 있게됨
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]); // useEffect와 비슷
  // getAverage함수의 리턴값을 가져다가 avg에 담아 출력함.
  // 첫번째 인자는 () => getAverage(list) 이고, 이 첫번째 함수의 리턴값이 avg에.
  // 두번째 인자는 [list] 이고, 이 list값이 바뀔때만 () => getAverage(list) 이 실행이 되어 avg값을 초기화 한다

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;

// useMemo를 이용해 useEffect 처럼 list값이 바뀔때만 getAverage함수를 실행하게 할 수 있다
