import Info from "./Info";
import { useState } from "react";

const Parent = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(show ? false : true);
  };

  return (
    <>
      <button onClick={handleClick}>toggle</button>
      {show && <Info />}
    </>
  );
};

export default Parent;
