import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const List = ({ data }) => {
  return (
    <Container>
      {data.map(({ image, title, isbn }) => (
        <Link to={isbn} key={isbn}>
          {/* to={`/book/${isbn}`} 라고 하면 절대경로라고 해서 슬래시 뒤에 있는 주소들이 다 바뀜(/book~부터 다 바뀜) */}
          <Item key={image}>
            <Thumbnail src={image} />
            <Title>{title}</Title>
          </Item>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default List;
