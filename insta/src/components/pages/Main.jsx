import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Posts from "../templates/Main/Posts";

const Main = () => {
  return (
    <>
      <Container>
        <Left>
          {/* <Shorts /> */}
          <Posts />
        </Left>
        <Right></Right>
      </Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Container = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  max-width: 470px;
  flex: 1;
`;
const Right = styled.div`
  background: skyblue;
  height: 400px;
  width: 320px;
  margin-left: 50px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  margin-top: 60px;
  background: #fafafa;
  min-height: calc(100vh - 400px);
`;

export default Main;
