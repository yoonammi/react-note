import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ImgHome } from "../../assets/images/home.svg";
import { ReactComponent as ImgNewPost } from "../../assets/images/new-post.svg";
import { ReactComponent as ImgFind } from "../../assets/images/find.svg";
import { ReactComponent as ImgFeed } from "../../assets/images/feed.svg";

const Header = () => {
  return (
    <>
      <Container>
        <Main>
          <LogoWrapper>
            <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Search>
            <Input placeholder="검색" />
          </Search>
          <Nav>
            <Icon>
              <ImgHome></ImgHome>
            </Icon>
            <Icon>
              <ImgNewPost></ImgNewPost>
            </Icon>
            <Icon>
              <ImgFind></ImgFind>
            </Icon>
            <Icon>
              <ImgFeed></ImgFeed>
            </Icon>
          </Nav>
        </Main>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const Main = styled.div`
  max-width: 975px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const LogoWrapper = styled.div`
  flex: 1;
`;
const ImgLogo = styled.img`
  width: 103px;
`;
const Search = styled.div`
  flex: 1;
`;
const Input = styled.input`
  width: 100%;
  background: #efefef;
  border-radius: 10px;
  border: none;
  height: 36px;
  padding-left: 20px;
  box-sizing: border-box;
`;
const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Icon = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

export default Header;
