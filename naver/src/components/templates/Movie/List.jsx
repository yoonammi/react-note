import React from "react";

import styled from "styled-components";

const List = ({ data }) => {
  return (
    <Container>
      {data.map(({ link, image, title, subtitle }) => (
        <Item key={link}>
          <Thumbnail src={image} />
          <a href={link} target="_blank" rel="noreferrer">
            <Name dangerouslySetInnerHTML={{ __html: title }} />
          </a>
          <SubTitle>{subtitle}</SubTitle>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;

const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.p``;
const SubTitle = styled.div`
  font-size: 14px;
`;

export default List;
