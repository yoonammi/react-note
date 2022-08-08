import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>환영합니다</h1>
      <Link to="/movie">
        <BtnLink>영화 검색</BtnLink>
      </Link>
      <Link to="/book">
        <BtnLink>책 검색</BtnLink>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const BtnLink = styled.button`
  margin: 20px;
  width: 200px;
  height: 80px;
  font-size: 20px;
  border: 1px solid #ddd;
  background: none;
`;

export default Main;

/*
a태그는 브라우저가 이동한다
<Link />: 라우터 이동은 브라우저와 상관없이 리액트 라우터에서 컴포넌트 교체가 일어난다
*/
