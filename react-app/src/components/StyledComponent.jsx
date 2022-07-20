import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;

/**

리엑트에서는 보통 styled component 를 많이 쓴다.
하나의 컴포넌트에만 css를 import해도 html파일에 css가 적용되는 것이기 때문에 모든 컴포넌트들에 css가 남아있는다. 그래서 css모듈을 쓴다.

일반css : index.css 같은..
scss, sass : 웹팩에서 컴파일(css로 변환) 해줘야함
css모듈 : 하나의 컴포넌트에만 css가 남게끔..


styledComponent 사용
- css in js(자바스크립트 파일 안에서 css 설정)
- 라이브러리 설치 필요
  : npm i styled-components
  => package.json에 추가됨
 */
