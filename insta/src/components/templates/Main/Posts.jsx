import { useEffect, useState } from "react";
import styled from "styled-components";
import PostApis from "../../../apis/post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const posts = await PostApis.getPosts();
    setPosts(posts);
    console.log(posts);
  };

  return (
    <List>
      {posts.map(({ id, images, content }) => (
        <Item>
          <Header>{id}</Header>
          <Images>
            {images.map((image) => (
              // 배열 안의 이미지는 스트링이라서 {}안붙음
              <Image src={image} />
            ))}
          </Images>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div``;
const Item = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  & + & {
    margin-top: 20px;
  }
`;
const Header = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 18px;
`;
const Images = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Body = styled.div`
  padding: 15px;
`;

export default Posts;
