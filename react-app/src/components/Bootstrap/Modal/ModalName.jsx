import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ type, onClose, name, onChange }) => {
  const [text, setText] = useState(name);

  const handleSubmit = () => {
    onChange(text);
    onClose();
  };
  return (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            onClose();
          }
        }}
      >
        <ModalContainer>
          <Header>{type} 바꾸기</Header>
          <Body>
            <Input
              placeholder={`${type}을 입력하세요`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Body>
          <Footer>
            <BtnClose onClick={onClose}>닫기</BtnClose>
            <BtnSubmit onClick={handleSubmit}>저장</BtnSubmit>
          </Footer>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  background: #fff;
  width: 400px;
`;
const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 24px;
`;
const Body = styled.div`
  padding: 15px;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Footer = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const BtnClose = styled.button`
  margin-right: 10px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 5px 12px;
`;
const BtnSubmit = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  background: #000;
  color: #fff;
  padding: 5px 12px;
`;

/*
e.target : 이벤트가 일어난 element
e.currentTarget : 이벤트가 등록된 element

이벤트 버블링 : 자식 요소를 클릭해도 부모 요소가 동작한다
*/
export default ModalName;
