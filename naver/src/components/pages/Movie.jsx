import React from "react";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { getMovies } from "../apis";

const Movie = (data) => {
  const [country, setCountry] = useState("KR");
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  // useEffect에 넣는 이유: api함수를 그냥 불러오면 렌더링 될때마다 서버에서 계속 불러올 거라서
  useEffect(() => {
    // 1방법
    // const fetch = async () => {
    //   const result = await getMovies();
    //   console.log(result);
    // };
    // fetch();

    // 2방법 즉시실행함수
    // (async () => {
    //   //iife
    //   const result = await getMovies();
    //   console.log(result);
    // })();

    refreshList();
  }, [country]);
  // 3방법

  const refreshList = async () => {
    const params = { query: text };
    if (country !== "all") {
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    refreshList();
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="all">전체</option>
          {data.map((code, name) => (
            <option value={code}>{name}</option>
          ))}
        </select>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
        <BtnSearch>검색</BtnSearch>
      </Form>
      <List>
        {items.map(({ link, image, title, subtitle }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name dangerouslySetInnerHTML={{ __html: title }} />
            </a>
            <SubTitle>{subtitle}</SubTitle>
          </Item>
        ))}
      </List>
    </>
  );
};

const Form = styled.form`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;
const List = styled.div`
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

export default Movie;
