import { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </>
  );
};

export default Axios;
