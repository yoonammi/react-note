import React from "react";

import { useEffect, useState } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";
import Header from "../organisms/Header";

const Movie = () => {
  const [items, setItems] = useState([]);

  const [params, setParams] = useState({ query: "", country: "all" });

  const { query, country } = params;

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
  }, [params]);
  // 3방법

  const refreshList = async () => {
    if (!query) return;

    const params = { query };
    if (country !== "all") {
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <Header />
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
    </>
  );
};

export default Movie;
