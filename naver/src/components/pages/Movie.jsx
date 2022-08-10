import React from "react";

import { useEffect, useState } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
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
  }, [params, page]);
  // 3방법

  const refreshList = async () => {
    if (!query) return;

    // console.log(page);
    //page => start
    //   1 : 1
    //   2 : 11
    //   3 : 21
    //   10 : 91
    //   11 : 101
    //   20 : 191
    //   100 : 991
    const display = 10;
    const start = (page - 1) * display + 1;
    // console.log(start);

    const params = { query, start };
    if (country !== "all") {
      params.country = country;
    }
    const { items, total } = await getMovies(params);
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);

    // 검색어와 나라 필터가 바뀌면 1페이지로 이동
    setPage(1);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Movie;
