import useInputs from "../hooks/useInputs";

const Info2 = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onchange} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
