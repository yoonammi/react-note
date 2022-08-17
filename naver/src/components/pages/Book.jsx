import React from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { getBooks } from "../../apis";

import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import Pagination from "../organisms/Pagination";

const Book = () => {
  const [params, setParams] = useState({ query: "" });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  // 해당 쿼리 값이 있으면 반환해줌
  const qsQuery = searchParams.get("query");
  const qsPage = searchParams.get("page");

  const { query } = params;

  useEffect(() => {
    if (qsQuery) {
      setParams((prev) => ({ ...prev, query: qsQuery }));
      // prev는 이전params값과 같다
    } else {
      //   setParams((prev) => ({ ...prev, query: "" }));
      setItems([]);
      setTotal(0);
    }
    if (qsPage) {
      setPage(+qsPage); // 앞에 +넣으면 숫자형으로 바뀜
    }
  }, [qsQuery, qsPage]);

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!params.query) return;

    const display = 10;
    const start = (page - 1) * display + 1;

    const { items, total } = await getBooks({ ...params, start });
    setItems(items);
    setTotal(total);
    setSearchParams({ query, page });
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    setPage(1);
  };

  return (
    <Container>
      <h1>책 검색</h1>
      <Form defaultQuery={qsQuery} onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Book;
