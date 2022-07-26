import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hooks/useDropdown";

const Dropdown = () => {
  const wrapperEl = useRef(null);

  const [show, setShow] = useDropdown(wrapperEl);

  //   document.body.addEventListener("click", () => {
  //     console.log("click!");
  //   }); //드랍다운 버튼을 반복해서 누르면 다시 계속 렌더링이 되기 때문에 계속 콘솔이 찍힘
  // 그러니까 바디에 이벤트리스너를 붙이는게 렌더링 될때마다 실행된다
  // 그래서 드랍다운 컴포넌트가 한번 생성이 될때 딱 한번만 바디에 이벤트 리스너를 붙여야 함

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setShow(!show)}>Dropdown Button</Button>
      {show && (
        <List>
          <Item>Action</Item>
          <Item>Another action</Item>
          <Item>something else</Item>
        </List>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
`;
const List = styled.div`
  position: absolute;
  top: 40px;
  width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid #efefef;
`;
const Item = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  &:hover {
    background: #e9ecef;
  }
`;

export default Dropdown;

/*
드롭다운 구현
1. 토글버튼 구현 (누를때 마다 나왔다 안나왔다) - useState, 조건부렌더링
2. 다른 부분을 눌렀을 때 닫히게 setShow(false)실행

*/
