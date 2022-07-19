import { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  const handleClick = () => {
    fileEl.current.click();
  };

  return (
    <>
      <button onClick={handleClick}>파일 업로드</button>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
    </>
  );
};

export default InputFile;

// <input type="file" /> : 스타일 불가능
