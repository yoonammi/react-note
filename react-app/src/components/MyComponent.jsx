const MyComponent = ({ name, message, children }) => {
  // 이 방식으로 하기로!(비구조 할당으로)

  return (
    <>
      <h1>
        부모가 물려준 이름은 {name}입니다. {message}!
      </h1>
      {children}
    </>
  );
};

export default MyComponent;
