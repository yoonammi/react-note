import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [index, setIndex] = useState(-1);
  // const index = 2;
  const handleClick = (i) => {
    const nextIndex = index === i ? -1 : i;
    setIndex(nextIndex);
  };
  return (
    <>
      <List>
        {data.map(
          (
            // () 인 이유는 jsx만 불러올거니까 괄호로
            { id, title, content },
            i
          ) => (
            <Item key={id} active={index === i}>
              <Header onClick={() => handleClick(i)}>
                {title}
                <BtnArrow />
              </Header>
              <Body>{content}</Body>
            </Item>
          )
        )}
      </List>
    </>
  );
};

const List = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background: #e7f1ff;

        ${BtnArrow} {
          transform: rotate(-180deg);
        }
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BtnArrow = styled.button`
  transition: all 0.5s;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: cover;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  display: none;
`;

export default Accordion;

/*
아코디언 구현
접근: <Header />를 누르면 <Body />의 display가 none로

1. <Body />의 display가 props.active에 따라서 true면 "block" , false면 "none"이 되도록
2. 특정 <Item />만 active되도록
3. active변수 useState로 선언하고 index 담기 : 1. 값이 바뀌면서 2. 재 렌더링 필요함
4. map함수의 index와 active값이 같으면 <Body />의 display:block, 다르면 none
5. <Header />를 누르면 <Header />의 index로 active값 교체
6. 열려있는 <Item />누르면 닫히도록
*/
